const header = document.getElementById('main-header');

// Imposta un punto di scorrimento (in pixel) per attivare il ridimensionamento
const scrollTrigger = 50;

// Aggiungi un listener per l'evento di scroll
window.addEventListener('scroll', () => {
    // Controlla se l'utente ha superato il punto di scorrimento
    if (window.scrollY > scrollTrigger) {
        // Aggiungi la classe 'shrink' per ridurre l'header e il titolo
        header.classList.add('shrink');
    } else {
        // Rimuovi la classe 'shrink' per ripristinare l'header e il titolo originali
        header.classList.remove('shrink');
    }
});