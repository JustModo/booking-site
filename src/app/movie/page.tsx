import Carousel from "@/components/Carousel";
import MovieBanner from "@/components/MovieBanner";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <main className="flex-grow">
      <MovieBanner>
        <Image
          src="https://image.tmdb.org/t/p/original/s6Mc1JxcLpt4yQBPB51BF6WCJnv.jpg"
          width={200}
          height={300}
          className="rounded-box w-72 h-3/4"
          alt="image"
        />
      </MovieBanner>
      <Carousel />
    </main>
  );
}
