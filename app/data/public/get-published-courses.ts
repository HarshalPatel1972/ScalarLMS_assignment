import { prisma } from "@/lib/db";

export async function getPublishedCourses() {
  const data = await prisma.course.findMany({
    where: {
      status: "Published",
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      title: true,
      smallDescription: true,
      duration: true,
      level: true,
      price: true,
      fileKey: true,
      slug: true,
      category: true,
    },
  });

  return data;
}

export type PublishedCourseType = Awaited<ReturnType<typeof getPublishedCourses>>[0];
