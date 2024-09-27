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
