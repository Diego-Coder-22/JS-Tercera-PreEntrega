import { handleProductoSelection } from "../helpers/handleProductoSelection.js";

export const Card = (props) => {

    let {id, name, type, thumbnail, origin, botanicName} = props;
    let div = document.createElement('div');
    div.setAttribute('class', 'card-content');
    div.innerHTML =
        `
      <img src=${thumbnail} alt="foto de ${name}">
      <div class="card-body">
        <p><span>${botanicName}</span> <span>${origin}</span></p>
        <h2> ${name}</h2>
        <p>Presentación:${type}</p>
        <a data-id=${id} class="card-link">Seleccionar Producto</a>
      </div>
    `;

    const selectedProductoLink = div.querySelector('.card-link');
    selectedProductoLink.addEventListener('click', () => handleProductoSelection(props));

    return div;
}