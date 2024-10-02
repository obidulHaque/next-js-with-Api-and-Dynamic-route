import React from "react";
import Link from "next/link";

export default function page() {
  const blog = [
    {
      id: 1,
      title: "first title ",
      description: "this is the discription",
    },
    {
      id: 2,
      title: "secound  title ",
      description: "this is the discription",
    },
  ];
  return (
    <div className="flex justify-center text-[3vw] ">
      {blog.map((item, index) => (
        <li key={index}>
          <Link href={`/contact/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </div>
  );
}
