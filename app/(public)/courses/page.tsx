import { getPublishedCourses } from "@/app/data/public/get-published-courses";
import { CourseCard } from "./_components/CourseCard";
import { BookOpen } from "lucide-react";

export default async function CoursesPage() {
  const courses = await getPublishedCourses();
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            <BookOpen className="size-4" />
            <span>Learning Catalog</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Explore our <span className="text-primary italic">Expert-Led</span> Courses
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Master new skills with our carefully curated content. From beginner basics to advanced concepts, start your learning journey today.
          </p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 px-4 py-2 rounded-lg border border-muted-foreground/10">
          <span className="font-bold text-foreground">{courses.length}</span> Courses Available
        </div>
      </div>

      {courses.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center border-2 border-dashed border-muted rounded-3xl bg-muted/5">
          <div className="size-16 rounded-2xl bg-muted flex items-center justify-center mb-6">
             <BookOpen className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold">No courses published yet</h3>
          <p className="text-muted-foreground mt-2 max-w-xs mx-auto">
            Our instructors are working hard to bring you the best content. Please check back soon!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} data={course} />
          ))}
        </div>
      )}
    </div>
  );
}
