import Image from "next/image";
import React from "react";
import Drawer from "./components/Drawer";
import ThemeButton from "./components/ThemeButton";
import AuthModal from "../AuthModal";

export default function NavBar() {
  return (
    <>
      <nav className="navbar bg-base-100 sticky top-0 z-50">
        <div className="flex-1">
          <ThemeButton />
        </div>
        <div className="flex-none gap-2 ">
          <div className="form-control hidden sm:block">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-96"
            />
          </div>
          <label htmlFor="modal" className="btn btn-accent w-28">
            Login
          </label>
          <Drawer />
        </div>
      </nav>
      <AuthModal id={"modal"} />
    </>
  );
}
