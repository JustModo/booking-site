import React from "react";

export default function MovieBanner({ children }) {
  return (
    <div className="relative w-full h-128 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage:
            'url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/94ab2ad3-e0d4-4764-85ad-873af742bd4a/dbir20a-4bbaed34-ef7e-4870-a533-3a76d71df7a6.png/v1/fill/w_1600,h_1062,q_75,strp/justice_league_movie_banner_poster_by_arkhamnatic-dbir20a.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS53YXRlcm1hcmsiXSwib2JqIjpbW3sicGF0aCI6Ii9mLzk0YWIyYWQzLWUwZDQtNDc2NC04NWFkLTg3M2FmNzQyYmQ0YS9kYmlyMjBhLTRiYmFlZDM0LWVmN2UtNDg3MC1hNTMzLTNhNzZkNzFkZjdhNi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCIsImhlaWdodCI6Ijw9MTA2MiJ9XV0sIndtayI6eyJwYXRoIjoiL3dtLzk0YWIyYWQzLWUwZDQtNDc2NC04NWFkLTg3M2FmNzQyYmQ0YS9hcmtoYW1uYXRpYy00LnBuZyIsIm9wYWNpdHkiOjk1LCJwcm9wb3J0aW9ucyI6MC40NSwiZ3Jhdml0eSI6ImNlbnRlciJ9fQ.RTY8XiDGr4hYEtwtAXdJL0lFUWB3kBUe6gCpJlJ8VKA")',
        }}
      />
      <div className="absolute inset-0 hidden md:block md:w-60 bg-base-100 transition-none" />
      <div className="absolute inset-0 md:left-60 md:w-3/4 w-full bg-gradient-to-b md:bg-gradient-to-l from-transparent to-neutral md:to-base-100" />
      <div className="w-full h-full absolute flex md:justify-start md:ml-14 justify-center items-center flex-row">
        {children}
      </div>
    </div>
  );
}
