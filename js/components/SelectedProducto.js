export const SelectedProducto = () => {

    const userData = JSON.parse(localStorage.getItem('userTurn'));

    const form = document.querySelector('.form-container');
    form.remove();
    
    const div = document.createElement('div');
    div.setAttribute('class', 'reserva-container');

    div.innerHTML = `
    <div class="prod-content">
        <div class="prod-content-left">
            <h2>Envio</h2>
            <h3>A nombre de: ${userData.name}</h3>
            <p>Contacto: ${userData.email}</p>
            <p>Fecha: ${userData.day}</p>
        </div>
        <div class="prod-content-rigth">
            <h2>Producto</h2>
            <img src=${userData.producto.thumbnail} alt="foto de ${userData.producto.name}">
            <h3>${userData.producto.name}</h3>
            <p>De Origen ${userData.producto.origin}</p>
            <button class="delete-button">Eliminar Reserva</button>
        </div>
    </div>
    
    `;

    const deleteButton = div.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => {
        localStorage.clear();
        window.location.reload();
    })

    return div;
}