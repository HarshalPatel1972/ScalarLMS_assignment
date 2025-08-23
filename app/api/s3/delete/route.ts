import { requireAdmin } from "@/app/data/admin/require-admin";
import arcjet, { detectBot, fixedWindow } from "@/lib/arcjet";
import { auth } from "@/lib/auth";
import { env } from "@/lib/env";
import { S3 } from "@/lib/S3Client";
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { error } from "console";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

//lets setup arcjet
const aj = arcjet
  .withRule(
    detectBot({
      mode: "LIVE",
      allow: [], //no bot is allowed to interact
    })
  )
  .withRule(
    fixedWindow({
      mode: "LIVE",
      window: "1m",
      max: 5,
    })
  );

export async function DELETE(request: Request) {
  //lets invoke arcjet
  //   const session = await auth.api.getSession({
  //     headers: await headers(),
  //   });

  //now we dont require const session, now we need to verify if a user is admin or not through require-admin.ts
  const session = await requireAdmin();

  try {
    const decision = await aj.protect(request, {
      fingerprint: session?.user.id as string,
    });

    if (decision.isDenied()) {
      return NextResponse.json({ error: "Dude not good" }, { status: 429 });
    }

    const body = await request.json();

    const key = body.key;

    if (!key) {
      return NextResponse.json(
        {
          error: "Missing or invalid object key",
        },
        {
          status: 400,
        }
      );
    }

    const command = new DeleteObjectCommand({
      Bucket: env.NEXT_PUBLIC_S3_BUCKET_NAME_IMAGES,
      Key: key,
    });

    await S3.send(command);

    return NextResponse.json(
      { message: "File deleted successfully" },
      {
        status: 200,
      }
    );
  } catch {
    return NextResponse.json(
      {
        error: "Missing or invalid object key",
      },
      {
        status: 500,
      }
    );
  }
}
