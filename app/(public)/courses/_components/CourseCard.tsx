import { PublishedCourseType } from "@/app/data/public/get-published-courses";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useConstructUrl } from "@/hooks/use-construct-url";
import { ArrowRight, School, TimerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

interface iAppProps {
  data: PublishedCourseType;
}

export function CourseCard({ data }: iAppProps) {
  const thumbnailUrl = useConstructUrl(data.fileKey);
  
  return (
    <Card className="group flex flex-col h-full overflow-hidden border-muted/40 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 backdrop-blur-sm bg-card/60">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={thumbnailUrl}
          alt={data.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-2 left-2 flex gap-2">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-md">
                {data.category}
            </Badge>
        </div>
      </div>
      
      <CardContent className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          <Link
            href={`/courses/${data.slug}`}
            className="font-bold text-xl line-clamp-1 hover:text-primary transition-colors block"
          >
            {data.title}
          </Link>
          <p className="line-clamp-2 text-sm text-muted-foreground mt-3 leading-relaxed">
            {data.smallDescription}
          </p>
          
          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
              <TimerIcon className="size-3.5 text-primary" />
              <span>{data.duration}h</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/30 px-2 py-1 rounded-md">
              <School className="size-3.5 text-primary" />
              <span>{data.level}</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-muted/50">
          <p className="font-bold text-xl text-primary">
            {data.price === 0 ? "Free" : `$${data.price}`}
          </p>
          <Link
            href={`/courses/${data.slug}`}
            className={buttonVariants({
              size: "sm",
              className: "rounded-full px-5",
            })}
          >
            View Details
            <ArrowRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
