let contenedor = document.getElementById("contenedor");
let boton = document.getElementById("boton");

let usuario;
let usuarioStorage = sessionStorage.getItem("usuario");
    if(usuarioStorage){
    usuario = usuarioStorage;
    let mensaje = `Bienvenid@ ${usuario}`;
    Swal.fire({
        title: (mensaje),
        showClass: {
        popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
        }
    })
}else{
    usuario = prompt("Ingrese su usuario");
    sessionStorage.setItem("usuario", usuario);
} 

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

    let carrito = []

    productos.forEach((producto) => {
    let item = document.createElement("div");
    item.innerHTML = `
                    <div class="card" id="cards" style="width: 18rem;">
                        <img class="card-img-top"  src="${producto.imagen}" alt="Card image ">
                        <div class="card-body">
                        <h2 class="card-title"> ${producto.nombre}</h2>
                        <p class="card-text">$${producto.precio}</p>
                        <button id = ${producto.id} > Agregar al carrito </button>
                        </div>
                    </div>
                    `;
        contenedor.append(item)
        const boton = document.getElementById (producto.id)
        boton.addEventListener ("click", () => agregarProducto (producto))
    
    }
    );
    const productosJSON = JSON.stringify (productos);
    localStorage.setItem ("productos", productosJSON);

    const agregarProducto =(producto) => {
    let productoAgregado = carrito.find (item => item.id === producto.id)
    if (productoAgregado === undefined){
        carrito.push({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagen,
        cantidad: 1
        })
    } else {
        productoAgregado.precio = productoAgregado.precio + producto.precio
        productoAgregado.cantidad = productoAgregado.cantidad + 1
    }

    }

    boton.addEventListener( "click", () => console.log (carrito))
