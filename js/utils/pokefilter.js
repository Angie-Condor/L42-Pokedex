'use strict';

const pokeFilter = (pokemon,name) => {
  return pokemon.filter((data) => {
    if (data.pokemon_species.name.toLowerCase().indexOf(name.toLowerCase()) != -1){
      return data;
    }
  });
};
