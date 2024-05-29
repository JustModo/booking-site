"use client";
import Image from "next/image";
import React, { useRef } from "react";

export default function Carousel() {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.children[0].offsetWidth;

      const carouselItems =
        scrollRef.current.querySelectorAll(".carousel-item");
      carouselItems.forEach((item) => {
        item.classList.remove("hover:scale-105");
      });

      const { scrollLeft } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - itemWidth * 3
          : scrollLeft + itemWidth * 3;

      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

      setTimeout(() => {
        carouselItems.forEach((item) => {
          item.classList.add("hover:scale-105");
        });
      }, 500);
    }
  };

  return (
    <div className="relative py-5">
      <h1 className="text-secondary font-bold text-xl mx-5">Popular</h1>
      <button
        className="bg-accent text-white px-4 py-2 rounded-full absolute left-2 z-10 hidden md:block"
        onClick={() => handleScroll("left")}
        style={{ top: "50%" }}
      >
        {"<"}
      </button>
      <div
        className="carousel space-x-2 md:space-x-4 p-4 bg-neutral rounded-box relative h-44 md:h-72"
        ref={scrollRef}
      >
        <div className="carousel-item carousel-start transition-transform duration-300 md:hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
            width={200}
            height={300}
            className="rounded-box ml-3 w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
        <div className="carousel-item carousel-end transform transition-transform duration-300 hover:scale-105">
          <Image
            src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
            width={200}
            height={300}
            className="rounded-box w-28 md:w-48"
            alt="image"
          />
        </div>
      </div>
      <button
        className="bg-accent text-white px-4 py-2 rounded-full absolute right-2 hidden md:block"
        onClick={() => handleScroll("right")}
        style={{ top: "50%" }}
      >
        {">"}
      </button>
    </div>
  );
}
