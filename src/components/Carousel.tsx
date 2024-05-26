"use client";
import Image from "next/image";
import React, { useRef } from "react";

export default function Carousel() {
  const scrollRef = useRef(null);

  const handleScroll = (direction: string) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0].offsetWidth;
      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - itemWidth : scrollLeft + itemWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-screen">
      <h1 className="text-light-primary font-bold text-xl mx-5">Popular</h1>
      <button
        className="bg-light-primary text-white px-4 py-2 rounded-full absolute left-2 z-10 hidden md:block"
        onClick={() => handleScroll("left")}
        style={{ top: "50%" }}
      >
        {"<"}
      </button>
      <div
        className="carousel w-screen space-x-4 p-4 bg-neutral rounded-box relative"
        ref={scrollRef}
      >
        <div className="carousel-item carousel-start">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            width={200}
            height={300}
            className="rounded-box ml-3"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
        <div className="carousel-item carousel-end">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            width={200}
            height={300}
            className="rounded-box"
            alt="image"
          />
        </div>
      </div>
      <button
        className="bg-light-primary text-white px-4 py-2 rounded-full absolute right-2 hidden md:block"
        onClick={() => handleScroll("right")}
        style={{ top: "50%" }}
      >
        {">"}
      </button>
    </div>
  );
}
