'use strict';

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(Header());
  wrapper.append(Buscar());
  wrapper.append(PokeGrid());

  root.append(wrapper);
}

const state = {
  pokemon: null,
  name: null,
  index: 0,
  pokemonspecies:null
};

  $( _ => {
    getJSON('pokedex.json', (err, json) => {

      if (err) { return alert(err.message);}

      state.pokemon = json.pokemon_entries;

      const root = $('#root');
      render(root);
    });
  });

// 'http://pokeapi.co/api/v2/pokedex/1/'
// state.pokemon[0].pokemon_species.name
