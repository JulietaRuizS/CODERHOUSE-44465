// Calcular costo total de productos y/o servicios seleccionados por el usuario.
let gastoTotal = 0;
let precioProducto = 0;
let contador = 0;


function ingresarPrecio() {
	precioProducto = Number(
		prompt('Ingrese el precio del producto' + (contador + 1) + ':')
	);

	while (precioProducto > 0) {
		gastoTotal = calcularTotal(precioProducto);
		contador++;
		precioProducto = Number(
			prompt('Ingrese el precio del producto' + (contador + 1) + ':')
		);
	}

	if (precioProducto <= 0) {
		alert('Ha terminado de introducir los productos. Le brindaremos el total.');
	}
}

function calcularTotal(precioProducto) {
	return gastoTotal + precioProducto;
}

function mostrarTotal() {

	alert('Cantidad de productos: ' + contador);
	alert('El precio total es $' + gastoTotal);
}

ingresarPrecio();
mostrarTotal();