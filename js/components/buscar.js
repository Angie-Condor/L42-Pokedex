'use strict';

const Buscar = () => {
  const row = $('<div class="row"></div>');
  const col8 = $('<div class="col-s8"></div>');
  const row2 = $('<div class="row"></div>');
  const col42 = $('<div class="col-s4"></div>');
  const search = $('<i class="material-icons search"></i>')
  const inputBuscar = $('<input type="text" class="busqueda" placeholder="Busca tu pokemon"/>');
  const col4 = $('<div class="col-s4"></div>');
  const p = $('<p>A-Z</p>');

  row.append(col8);
    col8.append(row2);
      row2.append(col42);
        col42.append(search);
        col42.append(inputBuscar);
  row.append(col4);
    col4.append(p);

  return row;
}
