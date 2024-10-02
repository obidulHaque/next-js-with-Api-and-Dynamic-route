// components/Comment.js
import getcomment from "@/lib/getcomment";

export default async function Comment({ id }) {
  const comment = await getcomment(id);

  return (
    <div>
      <h3>Comment</h3>
      <p>{comment.comment}</p>
    </div>
  );
}
