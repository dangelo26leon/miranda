// Script para manejar la apertura y cierre de los filtros
document.addEventListener('DOMContentLoaded', function() {
    const filterHeaders = document.querySelectorAll('.filter-header');
    
    filterHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            this.classList.toggle('collapsed');
            content.classList.toggle('collapsed');
        });
    });
});