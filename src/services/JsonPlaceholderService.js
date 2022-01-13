export function GET_LIST_POST() {
  return fetch(
    "https://be-fp-4.herokuapp.com/events/1/documentation"
  ).then((data) => data.json());
}
