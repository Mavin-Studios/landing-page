"use client";
import CarouselButtons from "./CarouselButtons";

interface CarouselContainerProps {
  children: React.ReactNode;
  className: string;
}

export default function CarouselContainer(
  props: Partial<CarouselContainerProps>
) {
  return (
    <div
      className={`relative grid grid-cols-1 grid-rows-1 h-[30rem] ${props.className}`}
    >
      <CarouselButtons />
      <div className="flex snap-mandatory snap-x">{props.children}</div>
    </div>
  );
}
