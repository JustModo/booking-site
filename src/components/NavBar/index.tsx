import Image from "next/image";
import React from "react";
import Drawer from "./components/Drawer";

export default function NavBar() {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">AppName</a>
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
