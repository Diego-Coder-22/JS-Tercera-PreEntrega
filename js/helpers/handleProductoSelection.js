export const handleProductoSelection = (producto) => {
    const selectedProducto = producto;

    localStorage.setItem('selectedProducto', JSON.stringify(selectedProducto));

    const selectedProductoDisplay = document.querySelector('#selected-producto');
    selectedProductoDisplay.textContent= `haz reservado ${producto.name}`
}