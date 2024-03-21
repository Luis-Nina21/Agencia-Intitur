/*-------------ESTE CODIGO ES PARA EL BOTON DE DESPLAZAMIENTO DE LA PARTE INFERIOR DERECHA-------*/

        // Mostrar u ocultar el botón basado en la posición del scroll
        window.onscroll = function() {
            mostrarBoton();
        };

        function mostrarBoton() {
            var botonInicio = document.getElementById("btnInicio");
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                botonInicio.style.display = "block";
            } else {
                botonInicio.style.display = "none";
            }
        }

        // Scroll suave al inicio de la página
        function scrollToTop() {
            document.body.scrollTop = 0; // Para navegadores Safari
            document.documentElement.scrollTop = 0; // Para otros navegadores
        }