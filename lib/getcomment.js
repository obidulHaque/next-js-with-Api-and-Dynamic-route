export default async function getcomment(id) {
  const result = await fetch(`https://jsonplaceholder.org/comments/${id}`);

  return result.json();
}
