import { Suspense } from "react";
import postBddy from "@/lib/postBddy";
import Comment from "@/components/comment";

export default async function Page({ params }) {
  const { id } = params;

  // Fetch post body
  const posts = await postBddy(id);

  return (
    <div className="mt-10 ml-11">
      <h1>{posts.body}</h1>

      {/* Use Suspense to wrap the Comment component */}
      <Suspense fallback={<p>Loading comments...</p>}>
        <Comment id={id} />
      </Suspense>
    </div>
  );
}
