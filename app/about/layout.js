import React from "react";
import Link from "next/link";

export default function Aboutlayout({ children }) {
  return (
    <div className="flex justify-center text-[3vw] flex-col items-center">
      <nav>
        <ul className="flex gap-3">
          <li>
            <Link href="/about/mission">Mission</Link>{" "}
          </li>
          <li>
            <Link href="/about/vission">|vission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
