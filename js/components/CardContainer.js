import { Card } from "./Card.js";

export const CardContainer = (props) => {

    let { productos } = props;

    console.log(productos)
    let section = document.createElement('section');
  
    section.setAttribute('class', 'card-container')
    productos.forEach(producto => {
        const card = Card(producto);
        section.append(card);
    });

    return section;
}