document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impedisce l'invio predefinito del modulo

    // Raccoglie i dati dal modulo
    const formData = new FormData(event.target);
    const name = sanitizeInput(formData.get("Name"));
    const email = sanitizeInput(formData.get("Email"));
    const subject = sanitizeInput(formData.get("Subject"));
    const message = sanitizeInput(formData.get("Message"));

    // Validazione personalizzata per tutti i campi
    if (!name.trim()) {
        alert("Please enter your name.");
        return; // Interrompe l'esecuzione se il campo non è valido
    }

    if (!email.trim() || !validateEmail(email)) {
        alert("Please enter a valid email address.");
        return; // Interrompe l'esecuzione se l'email non è valida
    }

    if (!subject.trim()) {
        alert("Please enter the subject.");
        return; // Interrompe l'esecuzione se il campo "subject" è vuoto
    }

    if (!message.trim()) {
        alert("Please enter your message.");
        return; // Interrompe l'esecuzione se il campo "message" è vuoto
    }

    // Se tutti i campi sono validi, mostriamo l'alert e non inviamo il modulo
    alert("All fields are valid and sanitized. Ready for further implementation!");

    // Il modulo non verrà inviato, l'alert è solo una simulazione.
});

// Funzione per sanificare l'input
function sanitizeInput(input) {
    const tempDiv = document.createElement("div");
    tempDiv.textContent = input;
    return tempDiv.innerHTML; // Escapes qualsiasi tag HTML
}

// Funzione per validare l'email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
