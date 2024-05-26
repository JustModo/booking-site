import Image from "next/image";
import React from "react";
import Drawer from "./components/Drawer";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100 sticky top-0 z-50">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-accent text-xl">
          AppName
        </Link>
      </div>
      <div className="flex-none gap-2 ">
        <div className="form-control hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-96"
          />
        </div>
        <Drawer />
      </div>
    </nav>
  );
}
