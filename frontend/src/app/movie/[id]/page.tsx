import Carousel from "@/components/Carousel/Carousel";
import MovieBanner from "@/components/MovieBanner";
import MovieCard from "@/components/MovieCard/MovieCard";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="flex-grow">
      <MovieBanner>
        <MovieCard />
      </MovieBanner>
      <Carousel />
    </main>
  );
}
