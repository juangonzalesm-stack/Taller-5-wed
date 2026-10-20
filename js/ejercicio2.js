function crearElemento(etiqueta, clase) {
    let elemento = document.createElement(etiqueta);
    if (clase) {
        elemento.className = clase;
    }
    return elemento;
}

function crearDivConTexto(texto, clase) {
    let elemento = crearElemento("div", clase);
    elemento.textContent = texto;
    return elemento;
}

function agregarElemento(hijo, contenedor) {
    contenedor.appendChild(hijo);
}

function crearTextoMixto(partes, clase) {
    let contenedor = crearElemento("div", clase);

    for (let i = 0; i < partes.length; i++) {
        if (typeof partes[i] === "string") {
            contenedor.appendChild(document.createTextNode(partes[i]));
        } else {
            let etiqueta = crearElemento(partes[i].etiqueta);
            etiqueta.textContent = partes[i].texto;
            if (partes[i].href) {
                etiqueta.href = partes[i].href;
            }
            agregarElemento(etiqueta, contenedor);
        }
    }

    return contenedor;
}

let servicios = [
    {
        icono: "far fa-chart-bar",
        titulo: "Market Analysis",
        texto: [
            "Praesent sed pharetra lorem, blandit convallis mi. Aenean ornare elit ac metus lacinia, sed iaculis nibh semper. Pellentesque est urna."
        ]
    },
    {
        icono: "far fa-comment",
        titulo: "Fast Support",
        texto: [
            "Credit goes to ",
            { etiqueta: "a", texto: "Pexels", href: "https://www.pexels.com" },
            " website for all images used in this template. Cras condimentum mi et sapien dignissim luctus."
        ]
    },
    {
        icono: "fas fa-fingerprint",
        titulo: "Top Security",
        texto: [
            "You have ",
            { etiqueta: "strong", texto: "no" },
            " authority to post this template as a ZIP file on your template collection websites. You can ",
            { etiqueta: "strong", texto: "use" },
            " this template for your commercial websites."
        ],
        boton: "Learn More"
    },
    {
        icono: "fas fa-users",
        titulo: "Social Work",
        texto: [
            "You can change ",
            { etiqueta: "a", texto: "Font Awesome icons", href: "https://fontawesome.com" },
            " by either ",
            { etiqueta: "em", texto: "fas or far" },
            " in the HTML codes. For Examples: ",
            { etiqueta: "em", texto: '<i class="fas fa-users"></i><i class="far fa-chart-bar"></i>' }
        ],
        boton: "Details"
    }
];

function crearServicio(datos) {
    let servicio = crearElemento("div", "servicio");
    let icono = crearElemento("i", "servicio__icono " + datos.icono);
    let contenido = crearElemento("div", "servicio__contenido");
    let titulo = crearDivConTexto(datos.titulo, "servicio__titulo");
    let texto = crearTextoMixto(datos.texto, "servicio__texto");

    agregarElemento(titulo, contenido);
    agregarElemento(texto, contenido);

    if (datos.boton) {
        let boton = crearElemento("button", "servicio__boton");
        boton.type = "button";
        boton.textContent = datos.boton;
        agregarElemento(boton, contenido);
    }

    agregarElemento(icono, servicio);
    agregarElemento(contenido, servicio);
    return servicio;
}

function crearSeccionServicios() {
    let seccion = crearElemento("div", "que-hacemos");
    let titulo = crearDivConTexto("What We Do", "que-hacemos__titulo");
    let introduccion = crearTextoMixto([
        "This is Infinite Loop, free Bootstrap 4.0 HTML template with a parallax effect. This layout is what you can modify and use for your websites. Please spread a word to your friends about our website. Thank you for supporting us. If you have any question, you can contact us or chat with us on our ",
        { etiqueta: "a", texto: "Tooplate Facebook page", href: "https://www.facebook.com/tooplate" },
        "."
    ], "que-hacemos__intro");
    let grid = crearElemento("div", "que-hacemos__grid");

    agregarElemento(titulo, seccion);
    agregarElemento(introduccion, seccion);

    for (let i = 0; i < servicios.length; i++) {
        agregarElemento(crearServicio(servicios[i]), grid);
    }

    agregarElemento(grid, seccion);
    document.body.appendChild(seccion);
}

crearSeccionServicios();
