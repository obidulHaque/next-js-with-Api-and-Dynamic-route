import Allpost from "@/lib/Allpost";
import Link from "next/link";

export default async function page() {
  const posts = await Allpost();

  return (
    <div className="mt-12 ml-14">
      {posts.map((post, index) => (
        <Link href={`/post/${post.id}`}>
          <ul key={post.id}>{post.title} </ul>
        </Link>
      ))}
    </div>
  );
}
