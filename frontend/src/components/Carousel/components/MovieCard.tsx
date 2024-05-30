import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function MovieCard({ path, id }) {
  const router = useRouter();
  return (
    <div
      className="carousel-item carousel-start transition-transform duration-300 md:hover:scale-105"
      onClick={() => router.push(`/movie/${id}`)}
    >
      <Image
        src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
        width={200}
        height={300}
        className="rounded-box ml-3 w-28 md:w-48"
        alt="image"
      />
    </div>
  );
}
