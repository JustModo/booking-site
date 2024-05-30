import Image from "next/image";
import React from "react";
import Tags from "./components/Tags";

export default function MovieCard() {
  return (
    <div className="flex flex-roww-1/2">
      <Image
        src="https://image.tmdb.org/t/p/original/s6Mc1JxcLpt4yQBPB51BF6WCJnv.jpg"
        width={200}
        height={300}
        className="rounded-box w-72 h-3/4"
        alt="image"
      />
      <div className="ml-10 justify-end flex flex-col flex-grow text-secondary gap-2">
        <h1 className="text-5xl font-bold font-sans">Justice League</h1>
        <div className="flex flex-row gap-2 pt-2">
          <Tags title={"Action"} />
          <Tags title={"Superhero"} />
          <Tags title={"Adventure"} />
        </div>
        <div className="flex flex-row gap-5">
          <h1 className="bg-secondary rounded-xl px-2 text-neutral font-bold">
            PG-12
          </h1>
          <h1 className="bg-secondary rounded-xl px-2 text-neutral font-bold">
            2h 30m
          </h1>
        </div>
        <div className="btn btn-accent p-2 rounded-xl mt-5">Book Tickets</div>
      </div>
    </div>
  );
}
