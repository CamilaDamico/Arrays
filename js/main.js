const Productos = 
[{id: 1, producto: "Collar", precio: 15,}, 
{id: 2, producto: "Jabon", precio: 4},
{id: 3, producto: "alimento", precio: 26}];

function calcularSubtotal () {


	for (const producto of Productos){
		console.log(producto.id);
		console.log(producto.producto)
		console.log(producto.precio + " pesos") 
	}

	let subtotal = 0;
	let cantidad = 0;

	let productoIngresado = prompt("Ingrese codigo de producto")

	while(productoIngresado !== "s") {
		switch(productoIngresado) {
			case "1":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * Productos[0].precio
				break;
			case "2":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * Productos[1].precio
				break;
			case "3":
				cantidad = prompt("Cuantos desea?")
				subtotal += cantidad * Productos[2].precio
				break;
		}
		productoIngresado = prompt("Ingrese codigo de producto")	
	}
	return subtotal;
}

function aplicarDescuentoSiCorresponde(subtotal) {
	let total = subtotal
	if (subtotal > 50) {
		total = subtotal - subtotal / 10
	}
	return total
}

const subtotal = calcularSubtotal()
console.log("El subtotal es " + subtotal)

const total = aplicarDescuentoSiCorresponde(subtotal)
console.log("El total es " + total)