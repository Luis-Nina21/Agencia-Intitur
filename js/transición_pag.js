document.addEventListener("DOMContentLoaded", function() {
    // Muestra el banner de cookies si no ha sido aceptado ni cancelado previamente

    // Agrega el evento de clic a los enlaces con la clase 'show-loader'
    var links = document.querySelectorAll('.show-loader');
    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Evita la acción predeterminada del enlace
            showLoader(); // Muestra el cargador
            // Simula un tiempo de carga (puedes ajustar esto según tus necesidades)
            setTimeout(function() {
                window.location.href = link.getAttribute('href'); // Redirecciona a la URL del enlace
            }, 1500); // Aquí, 1500 milisegundos (1.5 segundos) es solo un ejemplo
        });
    });
});

function showLoader() {
    var loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.opacity = "1"; // Muestra el cargador
    loaderWrapper.style.pointerEvents = "auto"; // Permite interacciones
}

function hideLoader() {
    var loaderWrapper = document.getElementById("loader-wrapper");
    loaderWrapper.style.opacity = "0"; // Oculta el cargador
    loaderWrapper.style.pointerEvents = "none"; // No permite interacciones
}
