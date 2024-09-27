document.addEventListener("DOMContentLoaded", () => {
    form = document.getElementById('contact_form');
    message = document.getElementById('formMessage');

    form.addEventListener("submit", (e) => {
        e.preventDefault()

        setTimeout(() => {
            message.style.display = "block";
            message.innerHTML = "Votre message à été envoyé avec succès !";
            form.reset();
        }, 1000);
    })
})