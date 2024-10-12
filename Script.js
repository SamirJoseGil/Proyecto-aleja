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

// Cargar la página inicial
loadPage(pages[currentPageIndex]);