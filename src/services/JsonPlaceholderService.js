export function GET_LIST_POST() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((data) =>
    data.json()
  );
}
