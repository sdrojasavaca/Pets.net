const calendarBody = document.getElementById('calendar-body');
const currentMonthYear = document.getElementById('currentMonthYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');

let currentDate = new Date(2024, 7, 27); // Agosto 27, 2024

function renderCalendar() {
    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    currentMonthYear.textContent = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;

    // Limpiar el cuerpo del calendario
    calendarBody.innerHTML = '';

    // Crear filas y celdas
    let date = 1;
    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 7; j++) {
            const cell = document.createElement('td');
            if (i === 0 && j < firstDayOfMonth || date > daysInMonth) {
                cell.textContent = '';
            } else {
                cell.textContent = date;
                // Aquí puedes agregar lógica para resaltar fechas especiales o eventos
            }
            row.appendChild(cell);
            date++;
        }
        calendarBody.appendChild(row);
    }
}

// Inicializar el calendario
renderCalendar();

// Manejadores de eventos para los botones
prevMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthButton.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});