const carrito = [];
const productos = [];

class Producto {
  constructor(id, nombre, precio, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
  }
  sumarIva() {
    return (
        this.precio = this.precio * 1), 21;
  }
  vendido() {
    this.stock = this.stock - 1;
  }
}

const producto1 = new producto(
    productos.length + 1, "Masilla Ceramica TNX24", 1250, 58);

productos.push(producto1);

const producto2 = new producto(
    productos.length + 1, "Masilla Ceramica TNX35", 1750, 70);

productos.push(producto2);

const producto3 = new producto(
    productos.length + 1, "Masilla Ceramica TNX 62", 1920, 40);

productos.push(producto3);


const producto4 = new producto(
    productos.length + 1, "Masilla Alunina ALUMINIK", 2500, 65);

productos.push(producto4);


function mostrarProductos() {
  alert(
    "Indique el producto que desea agregar al carrito",
  );
  productos.forEach((producto) => {
    alert(`
            ${producto.nombre}
            $${producto.precio}
        `);
  });
}

function mostrarCarrito() {
  alert("Usted cuenta con los siguientes productos en el carrito:");
  carrito.forEach((producto) => {
    alert(`
            ${producto.nombre}
            $${producto.precio}
        `);
  });

  let continuar = Number(
    prompt("Por favor indique 1- si desea continuar con la compra o 2 - si desea vaciar el carrito."),
  );
  switch (continuar) {
    case 1:
      let total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
      let iva = total * 1.21;
      alert(`El total de su compra es de $${iva}`);
      break;

    case 2:
      carrito.splice(0, carrito.length);
      alert("Su carrito se vacio con exito!");
      console.log(carrito);
      break;
  }
}

function comprar() {
  let compra = Number(
    prompt(
      "Indique el codigo del producto que desea comprar, 1- TNX24, 2- TNX35, 3- TNX62, 4- ALUNINIK 0-salir",
    ),
  );

  while (compra !== 0) {
    let resultado;
    switch (compra) {
      case 1:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 2:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 3:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;
      case 4:
        resultado = productos.find((producto) => producto.id === compra);
        carrito.push(resultado);

        break;

      default:
        alert("Ingrese un producto de la lista por favor");
    }
    compra = Number(
      prompt(
        "Indique el codigo del producto que desea comprar, 1- TNX24, 2- TNX35, 3- TNX62, 4- ALUNINIK 0-salir",
      ),
    );
  }
}

mostrarProductos();
comprar();
mostrarCarrito();