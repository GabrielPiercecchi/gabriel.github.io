// FILE: updateYear.js
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    const copyrightElement = document.getElementById('copyright');
    if (copyrightElement) {
        copyrightElement.innerHTML = `Copyright &copy; Gabriel Piercecchi, ${currentYear}`;
    }
}

// Esegui la funzione quando il DOM è completamente caricato
document.addEventListener('DOMContentLoaded', updateCopyrightYear);