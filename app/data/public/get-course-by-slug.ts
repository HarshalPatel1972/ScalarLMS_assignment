import { prisma } from "@/lib/db";

export async function getCourseBySlug(slug: string) {
  const data = await prisma.course.findUnique({
    where: {
      slug: slug,
      status: "Published",
    },
    include: {
      chapters: {
        orderBy: {
          position: "asc",
        },
        include: {
          lessons: {
            orderBy: {
              position: "asc",
            },
          },
        },
      },
    },
  });

  return data;
}

export type CourseDetailsType = Awaited<ReturnType<typeof getCourseBySlug>>;
