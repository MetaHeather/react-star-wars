const URL = 'https://swapi.co/api/';

export function getAllStarships() {
  return fetch(`${URL}starships`, {mode: "cors"})
    .then(res => res.json());
}