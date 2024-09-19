document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o envio do formulário para fazer a validação

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Verificação simples para campos vazios
    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else {
        errorMessage.style.display = 'none';
        // Simulação de autenticação de login
        if (username === 'admin' && password === '1234') {
            alert('Login bem-sucedido!');
            // Redirecionar para outra página
            window.location.href = "pagina-principal.html";
        } else {
            errorMessage.textContent = 'Usuário ou senha inválidos.';
            errorMessage.style.display = 'block';
        }
    }
});
