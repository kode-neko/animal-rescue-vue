import { urlApi } from "../constants";

function getAnimal(id) {
  return fetch(`${urlApi}animal/${id}`, { method: 'GET' })
    .then((raw) => raw.json());
}

function getAnimalList(offset, search, limit) {
  return fetch(`${urlApi}animal/list`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ offset, limit, search }),
  })
    .then((raw) => raw.json());
}

function postAnimal(animal) {
  return fetch(`${urlApi}/animal`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then((raw) => raw.json());
}

function putAnimal(animal) {
  return fetch(`${urlApi}/animal`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animal),
  })
    .then((raw) => raw.json());
}

function deleteAnimal(id) {
  return fetch(`${urlApi}/animal/${id}`, { method: 'DELETE' })
    .then((raw) => raw.json());
}

export {
  getAnimal,
  getAnimalList,
  postAnimal,
  putAnimal,
  deleteAnimal,
};