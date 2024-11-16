import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

const totalItems = 5;

export function Banner() {
  return (
    <Carousel className="mt-8">
      <CarouselContent className="h-auto">
        {Array.from({ length: totalItems }).map((_, index) => (
          <CarouselItem key={index}>
            <Card>
              <CardContent className="flex h-60 items-center justify-center p-6">
                <AspectRatio
                  ratio={16 / 9}
                  className="bg-muted w-full"
                ></AspectRatio>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
