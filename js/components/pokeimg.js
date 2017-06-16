'use strict';

const PokemonImg = (index,name) => {
    const container = $('<div class="container-pokemon col s2"></div>');
    const img = $('<img class="img-pokemon col s8 offset-s2" src="http://serebii.net/art/th/' + index +'.png" alt="' + name + '"/>');
    const divIcon =$('<div class="div-icon"></div>');

    container.append(img);
    container.append(divIcon);

    return container;
};
