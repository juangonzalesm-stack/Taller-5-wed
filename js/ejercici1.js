function crearElemento(tag) {
    let nodo = document.createElement(tag);
    return nodo;
}

// Crea un elemento y le agrega texto.
function crearNodoConTexto(tag, texto) {
    let nodo = crearElemento(tag);
    nodo.textContent = texto;
    return nodo;
}

// Agrega un elemento dentro de otro elemento.
function adicionarElementoAContenedor(elemento, contenedor) {
    contenedor.appendChild(elemento);
}

// Crea una imagen y configura su ruta y texto alternativo.
function crearImagen(src, alt) {
    let nodo = crearElemento("img");
    nodo.src = src;
    nodo.alt = alt;
    nodo.width = 300;
    nodo.height = 200;
    nodo.loading = "lazy";
    return nodo;
}

let galeria = document.querySelector("#layout-gallery");

let nombres = [
    "Real Estate",
    "Library",
    "Transportation",
    "Gas & Oil",
    "Marketing Agency",
    "Pizza",
    "Flooring",
    "Steel Processing",
    
];

let archivos = [
    "imagen1.webp",
    "imagen2.avif",
    "imagen3.webp",
    "imagen4.jpg",
    "imagen5.webp",
    "imagen6.webp",
    "imagen7.webp",
    "imagen8.jpg",
    "imagen9.webp"
];

for (let i = 0; i < nombres.length; i++) {
    let tarjeta = crearElemento("div");
    let imagen = crearImagen("../recursos/" + archivos[i], nombres[i]);
    let titulo = crearNodoConTexto("p", nombres[i]);

    adicionarElementoAContenedor(imagen, tarjeta);
    adicionarElementoAContenedor(titulo, tarjeta);
    adicionarElementoAContenedor(tarjeta, galeria);
}

