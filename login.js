document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    // Credenciales simuladas
    const correctUsername = 'admin';
    const correctPassword = 'password';

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validación simple
    if (username === correctUsername && password === correctPassword) {
        // Redirigir a la página de bienvenida
        window.location.href = 'welcome.html';
    } else {
        // Mostrar mensaje de error
        document.getElementById('errorMessage').style.display = 'block';
    }
});

