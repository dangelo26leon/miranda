document.addEventListener('DOMContentLoaded', function () {

    // Selecciona todos los botones de "VER ASIENTOS"
    const viewSeatsButtons = document.querySelectorAll('.view-seats-btn');
    const closeButtons = document.querySelectorAll('.close-seats-btn');

    // Función para mostrar/ocultar el panel
    function toggleSeatPanel(button) {
        // Encuentra el contenedor de bus (.bus-item) más cercano
        const busItem = button.closest('.bus-item');
        // Dentro de ese contenedor, encuentra la sección de asientos
        const seatContainer = busItem.querySelector('.seat-selection-container');
        // Añade o quita la clase 'is-open' para activar la animación CSS
        seatContainer.classList.toggle('is-open');
    }

    // Añade un evento de clic a cada botón de "VER ASIENTOS"
    viewSeatsButtons.forEach(button => {
        button.addEventListener('click', function () {
            toggleSeatPanel(this);
        });
    });

    // Añade un evento de clic a cada botón de "OCULTAR ASIENTOS"
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Reutilizamos la misma función porque hace exactamente lo mismo
            toggleSeatPanel(this);
        });
    });

    // La lógica para seleccionar un asiento no cambia
    const allSeats = document.querySelectorAll('.seat');
    allSeats.forEach(seat => {
        seat.addEventListener('click', function() {
            if (this.classList.contains('occupied')) {
                return;
            }
            this.classList.toggle('selected');
        });
    });

});

