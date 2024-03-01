function enter() {
    let userEmail = localStorage.getItem('userEmail');
    let userPassword = localStorage.getItem('userPassword');

    let loginEmail = document.getElementById('txt').value;
    let loginPassword = document.getElementById('key').value;

    if (loginEmail === userEmail && loginPassword === userPassword) {
        alert('Login bem-sucedido!');
        return true
        // Here you can redirect the user to another page, etc.
    } else {
        alert('E-mail ou senha incorretos. Tente novamente.');
        
        return false
    }
}
