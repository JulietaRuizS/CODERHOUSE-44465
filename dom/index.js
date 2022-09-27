let contenedor = document.getElementById("contenedor");
let productos = [
  {
    id: 18,
    nombre: "Masilla Ceramica TNX24", 
    precio: 1250, 
    imagen: "https://placka.com.ar/wp-content/uploads/2020/10/ab02_.png"
  },
  { 
    id: 42, 
    nombre: "Masilla Ceramica TNX35", 
    precio: 1750, 
    imagen:"https://placka.com.ar/wp-content/uploads/2020/10/ab03_.png"
  },
  { 
    id: 46, 
    nombre: "Masilla Ceramica TNX62", 
    precio: 1920, 
    imagen:"https://placka.com.ar/wp-content/uploads/2020/10/X001.png"
  },
  { 
    id: 34, 
    nombre: "Masilla Alunina ALUMINIK", 
    precio: 2500,
    imagen:"https://placka.com.ar/wp-content/uploads/2020/10/alu002.png"
  },
];
productos.forEach((producto) => {
  let item = document.createElement("div");
  item.innerHTML = `
                  <div class="card" id="cards" style="width: 18rem;">
                    <img class="card-img-top"  src="${producto.imagen}" alt="Card image ">
                    <div class="card-body">
                      <h2 class="card-title"> ${producto.nombre}</h2>
                      <p class="card-text">$${producto.precio}</p>
                      <a href="#" class="btn btn-primary">Comprar</a>
                    </div>
                  </div>
                  `;
  contenedor.append(item);
}
);
