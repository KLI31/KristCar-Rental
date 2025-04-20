"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const CardCarSkeleton = () => {
  return (
    <Card className="overflow-hidden transition-all duration-300  h-full flex flex-col">
      <div className="relative overflow-hidden aspect-[4/3]">
        <Skeleton className="w-full h-full" />
        <Skeleton className="absolute right-3 top-3 w-16 h-6 rounded-full" />
      </div>

      <CardHeader className="pb-2 pt-4 flex-shrink-0">
        <div className="flex items-start justify-between">
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-20" />
        </div>
      </CardHeader>

      <CardContent className="pb-2 flex-shrink-0">
        <div className="grid grid-cols-2 gap-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
            <Skeleton className="h-4 w-24" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4 rounded-full flex-shrink-0" />
            <Skeleton className="h-4 w-20" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between pt-2 gap-2 mt-auto">
        <Skeleton className="h-9 w-32" />
        <Skeleton className="h-9 w-9 rounded-full" />
      </CardFooter>
    </Card>
  );
};

export default CardCarSkeleton;
