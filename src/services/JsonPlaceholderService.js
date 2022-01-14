export function GET_LIST_POST(id) {
  return fetch(
    `https://be-fp-4.herokuapp.com/events/${id}/documentation`
  ).then((data) => data.json());
}
