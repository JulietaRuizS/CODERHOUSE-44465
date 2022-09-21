

class Producto {
    constructor(id, nombre, precio, stock) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.stock = stock;
    }
}
  
  let productos = [];
  productos.push(
    new Producto(
        productos.length + 1, "Masilla Ceramica TNX24", 1250, 58)
        );
  productos.push(
    new Producto(
        productos.length + 1, "Masilla Ceramica TNX35", 1750, 70)
        );
  productos.push(
    new Producto(
        productos.length + 1, "Masilla Ceramica TNX 62", 1920, 40)
        );
  productos.push(
    new Producto(
        productos.length + 1, "Masilla Alunina ALUMINIK", 2500, 65)
    );
  
  console.log(productos);