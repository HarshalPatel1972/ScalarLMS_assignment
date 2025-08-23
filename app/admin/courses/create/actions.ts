"use server";

import { requireAdmin } from "@/app/data/admin/require-admin";
import arcjet, { detectBot, fixedWindow } from "@/lib/arcjet";
import { prisma } from "@/lib/db";
import { ApiResponse } from "@/lib/types";
import { courseSchema, CourseSchemaType } from "@/lib/zodSchemas";
import { request } from "@arcjet/next";

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

export async function CreateCourse(
  values: CourseSchemaType
): Promise<ApiResponse> {
  const session = await requireAdmin();
  try {
    // const session = await auth.api.getSession({
    //   headers: await headers(),
    // });

    // Access request data that Arcjet needs when you call `protect()` similarly
    // to `await headers()` and `await cookies()` in `next/headers`
    const req = await request();

    //arcjet protection
    const decision = await aj.protect(req, {
      fingerprint: session?.user.id as string,
    });

    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return {
          status: "error",
          message: "You have been blocked due to rate limiting",
        };
      } else {
        return {
          status: "error",
          message: "You are a bot! if this is a mistake contact our support",
        };
      }
    }

    const validation = courseSchema.safeParse(values);

    //if failed
    if (!validation.success) {
      return {
        status: "error",
        message: "Invalid Form Data",
      };
    }

    const data = await prisma.course.create({
      data: {
        ...validation.data,
        // userId: "xyz",
        userId: session.user.id as string,
      },
    });

    return {
      status: "success",
      message: "Course created successfully",
    };
  } catch {
    // console.log(error);
    return {
      status: "error",
      message: "Failed to create course",
    };
  }
}
