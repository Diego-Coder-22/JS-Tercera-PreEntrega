import { Book } from "./components/Book.js";
import { CardContainer } from "./components/CardContainer.js";
import { SelectedProducto } from "./components/SelectedProducto.js";
import { Productos } from "./helpers/data.js";

export const App = () => {
    let appRoot = document.querySelector('#root');
    // console.log(appRoot)
    const userData = JSON.parse(localStorage.getItem('userTurn'));

    if(userData){
        appRoot.append(userData ? SelectedProducto() : '')
    } else {
        appRoot.append(CardContainer({ productos: Productos }));
        appRoot.append(Book({ productos: Productos }))
    }

}