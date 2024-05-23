//-- MENSAJE CON TIEMPO DE DURACION DE 5 SEGUNDOS --------------
function mensajeTemporal(tipo, mensaje) {
    // Crea el contenedor principal
    var contenedorMensaje = document.createElement('div');
    contenedorMensaje.style.position = 'fixed';
    contenedorMensaje.style.top = '6%'; // Centra verticalmente
    contenedorMensaje.style.left = '71%'; // Centra horizontalmente
    //contenedorMensaje.style.transform = 'translate(-50%, -50%)';
    contenedorMensaje.style.zIndex = '9999';
    contenedorMensaje.style.textAlign = 'center'; // Alinea el contenido al centro
    contenedorMensaje.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.9)'; // Sombra exterior
    contenedorMensaje.style.backgroundColor = '#fff'; // Fondo blanco
    contenedorMensaje.style.color = '#333'; // Texto negro
    contenedorMensaje.style.padding = '20px';
    contenedorMensaje.style.borderRadius = '20px';
    contenedorMensaje.style.fontWeight = 'bold'; // Texto en negrita
    contenedorMensaje.style.fontSize = '18px'; // Tamaño de fuente más grande

    // Crea un elemento de imagen para mostrar el icono
    var imagenMensaje = document.createElement('img');
    var ruta = '../../dist/img/mensajes/';
    if (tipo == 'exito') {
        imagenMensaje.src = ruta + 'exito.gif'; // Ruta de la imagen de éxito
    }
    if (tipo == 'info') {
        imagenMensaje.src = ruta + 'info.gif'; // Ruta de la imagen de información
    }
    if (tipo == 'peligro') {
        imagenMensaje.src = ruta + 'peligro.gif'; // Ruta de la imagen de peligro
    }
    if (tipo == 'error') {
        imagenMensaje.src = ruta + 'error.gif'; // Ruta de la imagen de error
    }
    imagenMensaje.alt = 'imgMensaje'; // Texto alternativo para la imagen
    imagenMensaje.style.width = '100px'; // Ancho de la imagen
    imagenMensaje.style.height = '100px'; // Alto de la imagen
    imagenMensaje.style.marginBottom = '10px'; // Espacio entre la imagen y el texto

    // Crea un elemento div para mostrar el mensaje
    var mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;
    mensajeDiv.style.marginTop = '10px'; // Espacio entre la imagen y el texto

    // Agrega la imagen y el mensaje al contenedor principal
    contenedorMensaje.appendChild(imagenMensaje);
    contenedorMensaje.appendChild(mensajeDiv);

    // Agrega el contenedor principal al cuerpo del documento
    document.body.appendChild(contenedorMensaje);

    // Define el tiempo de duración del mensaje en milisegundos
    var tiempoTotal = 5000; // 5 segundos
    var tiempoTranscurrido = 0;

    // Configura la barra de progreso
    var barraProgreso = document.createElement('div');
    barraProgreso.style.height = '10px'; // Altura de la barra de progreso
    barraProgreso.style.backgroundColor = 'lime'; // Color verde
    barraProgreso.style.width = '100%'; // Ancho completo
    barraProgreso.style.borderRadius = '5px';
    barraProgreso.style.marginTop = '10px'; // Espacio entre el mensaje y la barra de progreso
    contenedorMensaje.appendChild(barraProgreso);

    //Actualiza la barra de progreso en intervalos
    var intervalo = setInterval(function () {
        tiempoTranscurrido += 100;
        var porcentajeCompletado = (tiempoTranscurrido / tiempoTotal) * 100;
        barraProgreso.style.width = porcentajeCompletado + '%';
        if (tiempoTranscurrido >= tiempoTotal) {
            clearInterval(intervalo);
            document.body.removeChild(contenedorMensaje);
        }
    }, 100);
}


//-- MENSAJE CON BOTON ACEPTAR ---------------------------------
function mensajeAceptar(tipo, mensaje) {
    // Crea el contenedor principal
    var contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.style.position = 'fixed';
    contenedorPrincipal.style.top = '50%'; // Centra verticalmente
    contenedorPrincipal.style.left = '50%'; // Centra horizontalmente
    contenedorPrincipal.style.transform = 'translate(-50%, -50%)';
    contenedorPrincipal.style.zIndex = '9999';
    contenedorPrincipal.style.textAlign = 'center'; // Alinea el contenido al centro
    contenedorPrincipal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.9)'; // Sombra exterior

    // Crea un contenedor interno para el mensaje y la imagen
    var contenedorInterno = document.createElement('div');
    contenedorInterno.style.display = 'flex';
    contenedorInterno.style.flexDirection = 'column';
    contenedorInterno.style.alignItems = 'center';
    contenedorInterno.style.backgroundColor = '#fff'; // Fondo blanco
    contenedorInterno.style.color = '#333'; // Texto negro
    contenedorInterno.style.padding = '50px';
    contenedorInterno.style.border = '2px solid #ccc'; // Borde gris
    contenedorInterno.style.borderRadius = '20px';
    contenedorInterno.style.fontWeight = 'bold'; // Texto en negrita
    contenedorInterno.style.fontSize = '18px'; // Tamaño de fuente más grande

    // Crea un elemento de imagen para mostrar el icono
    var imagenExito = document.createElement('img');
    var ruta = '../../dist/img/mensajes/';
    if (tipo == 'exito') {
        imagenExito.src = ruta + 'exito.gif'; // Ruta de la imagen de éxito
    }
    if (tipo == 'info') {
        imagenExito.src = ruta + 'info.gif'; // Ruta de la imagen de información
    }
    if (tipo == 'peligro') {
        imagenExito.src = ruta + 'peligro.gif'; // Ruta de la imagen de peligro
    }
    if (tipo == 'error') {
        imagenExito.src = ruta + 'error.gif'; // Ruta de la imagen de error
    }
    imagenExito.alt = 'imgMensaje'; // Texto alternativo para la imagen
    imagenExito.style.width = '100px'; // Ancho de la imagen
    imagenExito.style.height = '100px'; // Alto de la imagen

    // Crea un elemento div para mostrar el mensaje
    var mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;

    // Crea un botón de aceptar
    var botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.style.backgroundColor = '#007bff'; // Color azul
    botonAceptar.style.color = '#fff'; // Texto blanco
    botonAceptar.style.padding = '10px 20px';
    botonAceptar.style.border = 'none';
    botonAceptar.style.borderRadius = '5px';
    botonAceptar.style.marginTop = '10px'; // Espacio entre el mensaje y el botón

    // Agrega un manejador de eventos para cerrar el mensaje al hacer clic en el botón
    botonAceptar.addEventListener('click', function () {
        document.body.removeChild(contenedorPrincipal);
    });

    // Agrega la imagen, el mensaje y el botón al contenedor interno
    contenedorInterno.appendChild(imagenExito);
    contenedorInterno.appendChild(mensajeDiv);
    contenedorInterno.appendChild(botonAceptar);

    // Agrega el contenedor interno al contenedor principal
    contenedorPrincipal.appendChild(contenedorInterno);

    // Agrega el contenedor principal al cuerpo del documento
    document.body.appendChild(contenedorPrincipal);
}


//-- MENSAJE CON PREGUNTA -------------------------------------
function mensajePregunta(mensaje) {
    // Crea el contenedor principal
    var contenedorPrincipal = document.createElement('div');
    contenedorPrincipal.style.position = 'fixed';
    contenedorPrincipal.style.top = '50%'; // Centra verticalmente
    contenedorPrincipal.style.left = '50%'; // Centra horizontalmente
    contenedorPrincipal.style.transform = 'translate(-50%, -50%)';
    contenedorPrincipal.style.zIndex = '9999';
    contenedorPrincipal.style.textAlign = 'center'; // Alinea el contenido al centro
    contenedorPrincipal.style.boxShadow = '0 0 15px rgba(0, 0, 0, 0.9)'; // Sombra exterior

    // Crea un contenedor interno para el mensaje y los botones
    var contenedorInterno = document.createElement('div');
    contenedorInterno.style.display = 'flex';
    contenedorInterno.style.flexDirection = 'column';
    contenedorInterno.style.alignItems = 'center';
    contenedorInterno.style.backgroundColor = '#fff'; // Fondo blanco
    contenedorInterno.style.color = '#333'; // Texto negro
    contenedorInterno.style.padding = '50px';
    contenedorInterno.style.border = '2px solid #ccc'; // Borde gris
    contenedorInterno.style.borderRadius = '20px';
    contenedorInterno.style.fontWeight = 'bold'; // Texto en negrita
    contenedorInterno.style.fontSize = '18px'; // Tamaño de fuente más grande

    // Crea un elemento de imagen para mostrar el icono
    var imagenExito = document.createElement('img');
    imagenExito.src = '../../dist/img/mensajes/pregunta.gif'; // Ruta de la imagen de error
    imagenExito.alt = 'imgMensaje'; // Texto alternativo para la imagen
    imagenExito.style.width = '100px'; // Ancho de la imagen
    imagenExito.style.height = '100px';

    // Crea un elemento div para mostrar el mensaje
    var mensajeDiv = document.createElement('div');
    mensajeDiv.textContent = mensaje;

    // Crea un contenedor para los botones
    var contenedorBotones = document.createElement('div');
    contenedorBotones.style.display = 'flex';
    contenedorBotones.style.justifyContent = 'center'; // Alinea los botones al centro
    contenedorBotones.style.marginTop = '20px'; // Espacio entre el mensaje y los botones

    // Crea un botón de aceptar
    var botonAceptar = document.createElement('button');
    botonAceptar.textContent = 'Aceptar';
    botonAceptar.style.backgroundColor = '#007bff'; // Color azul
    botonAceptar.style.color = '#fff'; // Texto blanco
    botonAceptar.style.padding = '10px 20px';
    botonAceptar.style.border = 'none';
    botonAceptar.style.borderRadius = '5px';
    botonAceptar.style.marginRight = '10px'; // Espacio entre los botones

    // Crea un botón de cancelar
    var botonCancelar = document.createElement('button');
    botonCancelar.textContent = 'Cancelar';
    botonCancelar.style.backgroundColor = '#dc3545'; // Color rojo
    botonCancelar.style.color = '#fff'; // Texto blanco
    botonCancelar.style.padding = '10px 20px';
    botonCancelar.style.border = 'none';
    botonCancelar.style.borderRadius = '5px';

    // Agrega un manejador de eventos para cerrar el mensaje al hacer clic en el botón "Aceptar"
    botonAceptar.addEventListener('click', function () {
        document.body.removeChild(contenedorPrincipal);
    });

    // Agrega un manejador de eventos para cerrar el mensaje al hacer clic en el botón "Cancelar"
    botonCancelar.addEventListener('click', function () {
        document.body.removeChild(contenedorPrincipal);
    });

    // Agrega los botones al contenedor de botones
    contenedorBotones.appendChild(botonAceptar);
    contenedorBotones.appendChild(botonCancelar);

    // Agrega la imagen, el mensaje y los botones al contenedor interno
    contenedorInterno.appendChild(imagenExito);
    contenedorInterno.appendChild(mensajeDiv);
    contenedorInterno.appendChild(contenedorBotones);

    // Agrega el contenedor interno al contenedor principal
    contenedorPrincipal.appendChild(contenedorInterno);

    // Agrega el contenedor principal al cuerpo del documento
    document.body.appendChild(contenedorPrincipal);
}
