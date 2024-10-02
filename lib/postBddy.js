export default async function postBddy(id) {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return result.json();
}
