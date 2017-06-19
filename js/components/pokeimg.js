'use strict';

const PokemonImg = (index,name) => {
    const container = $('<div class="container-pokemon col s2"></div>');
    const img = $('<img class="img-pokemon col s8 offset-s2" src="http://serebii.net/art/th/' + index +'.png" alt="' + name + '"/>');
    const divIcon =$('<div class="div-icon"></div>');
    const iconPokebola = $('<i class="icon pokebola"></i>');
  	const iconCorazon = $('<i class="icon heart"></i>');
  	const iconFlecha = $('<i class="icon flecha"></i>');
    const nombre = $('<span id="namePokemon">' +name+ '</span>');

    container.append(img);
    container.append(divIcon);
    divIcon.append(iconPokebola);
    divIcon.append(iconCorazon);
    divIcon.append(iconFlecha);
    divIcon.append(nombre);

    return container;
};
