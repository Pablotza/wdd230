document.addEventListener('DOMContentLoaded', function () {
    var darkModeSwitch = document.getElementById('darkModeSwitch');
    var body = document.body;

    // Función para cambiar el modo
    function toggleDarkMode() {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    }

    // Verificar el estado actual del interruptor al cargar la página
    toggleDarkMode();

    // Agregar un event listener al interruptor para cambiar el modo
    darkModeSwitch.addEventListener('change', function () {
        toggleDarkMode();
    });
});
