'use strict';

const PokeGrid = () => {
  const row = $('<div class="row"></div>');
  const docuFragment = document.createDocumentFragment();

  state.pokemon.forEach((index) => {
    (PokemonImg(index.entry_number, index.pokemon_species.name)).appendTo(docuFragment);
  });

    row.append(docuFragment);

  return row;
};
