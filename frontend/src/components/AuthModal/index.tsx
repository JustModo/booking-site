"use client";
import React, { useState } from "react";
import LoginModal from "./components/LoginModal";
import RegisterModal from "./components/RegisterModal";

export default function AuthModal({ id }) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal modal-bottom md:modal-middle" role="dialog">
        <div className="modal-box w-full md:w-auto md:px-12 md:py-7 h-auto flex flex-col items-center pb-16 ">
          <form method="dialog">
            <label
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              htmlFor={id}
            >
              ✕
            </label>
          </form>
          {isLogin ? <LoginModal /> : <RegisterModal />}
          <label
            className="link link-hover"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Register" : "Login"}
          </label>
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </>
  );
}
