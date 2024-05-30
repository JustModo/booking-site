"use client";
import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme();
  return (
    <Link className="btn btn-accent text-xl" href="/">
      AppName
    </Link>
  );
}
