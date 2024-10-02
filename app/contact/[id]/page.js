import { notFound } from "next/navigation";

export default function page({ params }) {
  const { id } = params;
  if (id >= "3") {
    notFound();
  }
  return <div>the blog id is {id} </div>;
}
