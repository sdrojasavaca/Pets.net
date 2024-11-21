// Tarjetas  //      // Tarjetas //      // Tarjetas //
    /**
     * Función para crear una tarjeta detallada y añadirla al contenedor.
     * @param {string} imageUrl - URL de la imagen.
     * @param {string} name - Nombre del elemento.
     * @param {string} especie - Animal al que pertenece el elemento.
     * @param {string} raza - Raza del elemento.
     * @param {string} sexo - Masculino o femenino del elemento.
     * @param {string} tamanho - Descripción del tamaño del elemento.
     * @param {string} localidad - Localidad del elemento.
     * @param {string} features - Descripción o características.
     */
    function createCard(imageUrl, name, especie, raza, sexo, tamanho, localidad, features) {
      if (!imageUrl || !name || !especie || !raza || !sexo || !tamanho || !localidad || !features) {
        console.error('Todos los parámetros deben ser "not null".');
        return;
      }

      // Crear elementos de la tarjeta
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = imageUrl;
      img.alt = name;

      const cardBody = document.createElement('div');
      cardBody.className = 'card-body';

      const cardTitle = document.createElement('h3');
      cardTitle.className = 'card-title';
      cardTitle.textContent = name;

      const cardEspecie = document.createElement('p');
      cardEspecie.className = 'card-detail';
      cardEspecie.textContent = `Especie: ${especie}`;

      const cardRaza = document.createElement('p');
      cardRaza.className = 'card-detail';
      cardRaza.textContent = `Raza: ${raza}`;

      const cardSexo = document.createElement('p');
      cardSexo.className = 'card-detail';
      cardSexo.textContent = `Sexo: ${sexo}`;

      const cardTamanho = document.createElement('p');
      cardTamanho.className = 'card-detail';
      cardTamanho.textContent = `Tamaño: ${tamanho}`;

      const cardLocalidad = document.createElement('p');
      cardLocalidad.className = 'card-detail';
      cardLocalidad.textContent = `Localidad: ${localidad}`;

      const cardFeatures = document.createElement('p');
      cardFeatures.className = 'card-features';
      cardFeatures.textContent = `Características: ${features}`;

      // Ensamblar la tarjeta
      cardBody.appendChild(cardTitle);
      cardBody.appendChild(cardEspecie);
      cardBody.appendChild(cardRaza);
      cardBody.appendChild(cardSexo);
      cardBody.appendChild(cardTamanho);
      cardBody.appendChild(cardLocalidad);
      cardBody.appendChild(cardFeatures);
      card.appendChild(img);
      card.appendChild(cardBody);

      // Agregar la tarjeta al contenedor
      const container = document.getElementById('cardContainer');
      container.appendChild(card);
    }

    // Ejemplo de uso
    const exampleCards = [
      ['https://via.placeholder.com/250x150', 'Max', 'Perro', 'Labrador', 'Masculino', 'Grande', 'Córdoba', 'Muy activo y amigable, ideal para familias con niños.'],
      ['https://via.placeholder.com/250x150', 'Luna', 'Gato', 'Persa', 'Femenino', 'Pequeño', 'La Falda', 'Cariñosa y tranquila, perfecta para departamentos.'],
      ['https://via.placeholder.com/250x150', 'Rocky', 'Perro', 'Pitbull', 'Masculino', 'Mediano', 'Villa Carlos Paz', 'Leal y protector, necesita entrenamiento.'],
      ['https://via.placeholder.com/250x150', 'Bella', 'Conejo', 'Mini Lop', 'Femenino', 'Pequeño', 'Mendiolaza', 'Dócil y juguetona, perfecta para niños.'],
      ['https://via.placeholder.com/250x150', 'Simba', 'Gato', 'Maine Coon', 'Masculino', 'Grande', 'Alta Gracia', 'Independiente pero cariñoso, necesita espacio.'],
      ['https://via.placeholder.com/250x150', 'Max', 'Perro', 'Labrador', 'Masculino', 'Grande', 'Córdoba', 'Muy activo y amigable, ideal para familias con niños.'],
      ['https://via.placeholder.com/250x150', 'Luna', 'Gato', 'Persa', 'Femenino', 'Pequeño', 'La Falda', 'Cariñosa y tranquila, perfecta para departamentos.'],
      ['https://via.placeholder.com/250x150', 'Rocky', 'Perro', 'Pitbull', 'Masculino', 'Mediano', 'Villa Carlos Paz', 'Leal y protector, necesita entrenamiento.'],
      ['https://via.placeholder.com/250x150', 'Bella', 'Conejo', 'Mini Lop', 'Femenino', 'Pequeño', 'Mendiolaza', 'Dócil y juguetona, perfecta para niños.'],
      ['https://via.placeholder.com/250x150', 'Simba', 'Gato', 'Maine Coon', 'Masculino', 'Grande', 'Alta Gracia', 'Independiente pero cariñoso, necesita espacio.'],
    ];

    exampleCards.forEach(cardData => createCard(...cardData));

// Fin Tarjetas  //      // Fin Tarjetas //      // Fin Tarjetas //


// buscador //      // buscador //      // buscador //
document.addEventListener('DOMContentLoaded', function () {
    const inputBusqueda = document.getElementById('search-input');
    const sectionsVet = document.querySelectorAll('.vet-locations .section');

    inputBusqueda.addEventListener('input', function () {
        filtroVetLocalidad();
    });

    function filtroVetLocalidad() {
        const texto = inputBusqueda.value.toLowerCase();
        sectionsVet.forEach(section => {
            const localidad = section.getAttribute('data-localidad').toLowerCase();
            if (localidad.includes(texto)) {
                section.style.display = '';
            } else {
                section.style.display = 'none';
            }
        });
    }
});

// fin buscador //    // fin buscador //    // fin buscador //


// calendario //    // calendario //    // calendario //
        const calendarBody = document.getElementById('calendar-body');
        const currentMonthYear = document.getElementById('currentMonthYear');
        const prevMonthButton = document.getElementById('prevMonth');
        const nextMonthButton = document.getElementById('nextMonth');

        let currentDate = new Date(); // Iniciar con la fecha actual

        // Función para renderizar el calendario
        function renderCalendar() {
            const monthNames = [
                "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
                "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
            ];

            const daysInMonth = new Date(
                currentDate.getFullYear(), currentDate.getMonth() + 1, 0
            ).getDate(); // Días totales del mes actual

            const firstDayOfMonth = new Date(
                currentDate.getFullYear(), currentDate.getMonth(), 1
            ).getDay(); // Primer día de la semana del mes actual

            // Actualizar el mes y año en el encabezado
            currentMonthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

            // Limpiar el cuerpo del calendario
            calendarBody.innerHTML = '';

            let date = 1;
            const rows = 6; // Máximo número de filas en un mes
            const cols = 7; // Días de la semana (Lun-Dom)

            // Crear las filas y celdas del calendario
            for (let i = 0; i < rows; i++) {
                const row = document.createElement('tr');

                for (let j = 0; j < cols; j++) {
                    const cell = document.createElement('td');

                    // Condiciones para las celdas vacías al inicio del mes
                    if (i === 0 && j < (firstDayOfMonth || 7) - 1 || date > daysInMonth) {
                        cell.textContent = '';
                    } else {
                        cell.textContent = date;

                        // Evento de clic para interactuar con las fechas
                        cell.addEventListener('click', () => {
                            alert(`Has seleccionado el día ${date}`);
                        });

                        date++;
                    }

                    row.appendChild(cell); // Añadir la celda a la fila
                }

                calendarBody.appendChild(row); // Añadir la fila al cuerpo del calendario
            }
        }

        // Inicializar el calendario al cargar la página
        renderCalendar();

        // Eventos para cambiar de mes
        prevMonthButton.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1); // Mes anterior
            renderCalendar();
        });

        nextMonthButton.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1); // Mes siguiente
            renderCalendar();
        });
//fin calendario //    //fin calendario //    //fin calendario //
