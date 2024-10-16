const pages = [
    './Pages/Pautas.html',
    './Pages/Herramientas.html',
    './Pages/Desensamble.html',
    './Pages/AntesDelEnsamble.html',
    './Pages/Ensamble.html'
];
let currentPageIndex = 0;

function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
            document.getElementById('page-number').textContent = currentPageIndex + 1;
        })
        .catch(error => console.error('Error al cargar la página:', error));
}

function nextPage() {
    if (currentPageIndex < pages.length - 1) {
        currentPageIndex++;
        loadPage(pages[currentPageIndex]);
    }
}

function previousPage() {
    if (currentPageIndex > 0) {
        currentPageIndex--;
        loadPage(pages[currentPageIndex]);
    }
}

function startManual() {
    window.location.href = 'Welcome.html'; // Cambia 'index.html' por la página de inicio de tu manual
}

// Cargar la página inicial
loadPage(pages[currentPageIndex]);