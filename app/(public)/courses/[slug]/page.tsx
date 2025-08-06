import { getCourseBySlug } from "@/app/data/public/get-course-by-slug";
import { constructUrl } from "@/lib/utils";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  ChevronRight, 
  Clock, 
  PlayCircle, 
  ShieldCheck, 
  Star, 
  Users 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default async function CourseDetailsPage({ params }: { params: { slug: string } }) {
  const course = await getCourseBySlug(params.slug);
  
  if (!course) {
    return notFound();
  }

  const thumbnailUrl = constructUrl(course.fileKey); 

  return (
    <div className="bg-background min-h-screen pb-20">
      {/* Hero Section */}
      <div className="relative text-white py-16 md:py-24 overflow-hidden bg-slate-950">
        <div className="absolute inset-0 opacity-20">
             <Image 
                src={thumbnailUrl} 
                alt="Background" 
                fill 
                className="object-cover blur-3xl"
             />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-primary text-white border-none px-3 py-1">
                  {course.category}
                </Badge>
                <Badge variant="outline" className="text-white border-white/20 px-3 py-1 backdrop-blur-md bg-white/5">
                  {course.level}
                </Badge>
              </div>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1]">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
                {course.smallDescription}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 pt-4 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Star className="size-5 text-yellow-400 fill-yellow-400" />
                  <span>4.8 (2.4k ratings)</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Users className="size-5" />
                  <span>15,402 students enrolled</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="size-5" />
                  <span>Last updated Aug 2025</span>
                </div>
              </div>

              <div className="flex items-center gap-4 pt-8">
                <Button size="lg" className="rounded-full px-8 h-12 text-base font-bold shadow-lg shadow-primary/20">
                  Enroll Now — ${course.price}
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-8 h-12 text-base font-bold border-white/20 hover:bg-white/10 text-white">
                  Add to Wishlist
                </Button>
              </div>
            </div>

            <div className="hidden lg:block relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <Image 
                src={thumbnailUrl} 
                alt={course.title} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/10 transition-colors group cursor-pointer">
                <div className="size-20 rounded-full bg-primary flex items-center justify-center shadow-2xl shadow-primary/40 group-hover:scale-110 transition-transform">
                  <PlayCircle className="size-10 text-white fill-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {/* Description */}
            <section className="space-y-6">
              <h2 className="text-3xl font-black">Course Description</h2>
              <div className="prose prose-slate dark:prose-invert max-w-none text-muted-foreground leading-loose text-lg">
                {course.description}
              </div>
            </section>

            {/* Curriculum */}
            <section className="space-y-8">
              <div className="flex items-end justify-between border-b pb-6">
                <div>
                  <h2 className="text-3xl font-black">Curriculum</h2>
                  <p className="text-muted-foreground mt-2">
                    {course.chapters.length} modules • {course.chapters.reduce((acc, c) => acc + c.lessons.length, 0)} lessons
                  </p>
                </div>
                <Button variant="ghost" className="font-bold text-primary hover:text-primary hover:bg-primary/5">
                  Expand All
                </Button>
              </div>

              <div className="space-y-4">
                {course.chapters.map((chapter, cIdx) => (
                  <Card key={chapter.id} className="border-muted/50 overflow-hidden bg-muted/5">
                    <div className="p-5 flex items-center justify-between border-b border-muted/50 bg-background/50">
                      <div className="flex items-center gap-4">
                        <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-bold">
                          {cIdx + 1}
                        </div>
                        <h3 className="font-bold text-lg">{chapter.title}</h3>
                      </div>
                      <span className="text-sm text-muted-foreground font-medium">
                        {chapter.lessons.length} lessons
                      </span>
                    </div>
                    <CardContent className="p-0">
                      {chapter.lessons.map((lesson, lIdx) => (
                        <div key={lesson.id} className="group flex items-center justify-between p-4 hover:bg-muted/30 transition-colors border-b last:border-none border-muted/30">
                          <div className="flex items-center gap-4 flex-1">
                            <PlayCircle className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-slate-600 dark:text-slate-400 group-hover:text-foreground transition-colors font-medium">
                              {lesson.title}
                            </span>
                          </div>
                          <div className="flex items-center gap-6">
                            <span className="text-sm text-muted-foreground tabular-nums">12:45</span>
                            <ChevronRight className="size-4 text-muted-foreground" />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Info */}
          <div className="space-y-8">
            <Card className="sticky top-24 border-primary/20 shadow-xl shadow-primary/5">
              <CardContent className="p-8 space-y-8">
                <div className="space-y-4">
                  <h3 className="font-bold text-xl">This course includes:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      <PlayCircle className="size-5 text-primary" />
                      <span>{course.duration} hours on-demand video</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      <BookOpen className="size-5 text-primary" />
                      <span>{course.chapters.reduce((acc, c) => acc + c.lessons.length, 0)} deep-dive lessons</span>
                    </li>
                    <li className="flex items-center gap-3 text-muted-foreground text-sm font-medium">
                      <ShieldCheck className="size-5 text-primary" />
                      <span>Certificate of completion</span>
                    </li>
                  </ul>
                </div>
                
                <div className="pt-6 border-t space-y-4">
                  <Button className="w-full h-14 rounded-2xl text-lg font-black shadow-lg shadow-primary/20">
                    Buy Course Today
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    30-Day Money-Back Guarantee
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
