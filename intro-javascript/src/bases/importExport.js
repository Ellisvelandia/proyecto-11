import { heroes, owners } from "../data/heroes";

// console.log(heroes);
// console.log(owners);

export const getHeroesById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

// console.log(getHeroesById(2));

export const getHeroesByOwner = (owner) => {
  return heroes.filter((owners) => owners.owner === owner);
};

// console.log(getHeroesByOwner("DC"));
// console.log(getHeroesByOwner("Marvel"));
