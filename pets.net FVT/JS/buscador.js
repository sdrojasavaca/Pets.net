document.addEventListener('DOMContentLoaded', function () {
    const inputBusqueda = document.querySelector('input[type="text"]');
    const refugios = document.querySelectorAll('.refugio-item');

    inputBusqueda.addEventListener('input', function () {
        const filtro = inputBusqueda.value.toLowerCase();
        
        refugios.forEach(function (refugio) {
            const texto = refugio.textContent.toLowerCase();
            if (texto.includes(filtro)) {
                refugio.style.display = '';
            } else {
                refugio.style.display = 'none';
            }
        });
    });
});
