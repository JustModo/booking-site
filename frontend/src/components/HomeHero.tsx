"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function HomeHero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94ab2ad3-e0d4-4764-85ad-873af742bd4a/dbir20a-4bbaed34-ef7e-4870-a533-3a76d71df7a6.png/v1/fill/w_1600,h_1062,q_75,strp/justice_league_movie_banner_poster_by_arkhamnatic-dbir20a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzk0YWIyYWQzLWUwZDQtNDc2NC04NWFkLTg3M2FmNzQyYmQ0YS9kYmlyMjBhLTRiYmFlZDM0LWVmN2UtNDg3MC1hNTMzLTNhNzZkNzFkZjdhNi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCIsImhlaWdodCI6Ijw9MTA2MiJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzk0YWIyYWQzLWUwZDQtNDc2NC04NWFkLTg3M2FmNzQyYmQ0YS9hcmtoYW1uYXRpYy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.RTY8XiDGr4hYEtwtAXdJL0lFUWB3kBUe6gCpJlJ8VKA",
    "https://2.bp.blogspot.com/_o31CLSHm6KA/TA8B2Cp026I/AAAAAAAAAFM/Je4jEiWYRWo/s1600/Inception+banner+1.jpg",
    "https://wallup.net/wp-content/uploads/2019/09/858538-poster-movie-film-movies-posters.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="h-52 md:h-144 relative bg-neutral">
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral top-1/2 h-1/2"
        style={{
          zIndex: 1,
        }}
      />
      <div
        className="bg-cover w-full h-full transition-colors"
        style={{
          backgroundImage: `url("${images[currentImageIndex]}")`,
        }}
      />
    </div>
  );
}
