// page.js

document.addEventListener("DOMContentLoaded", function() {
    let userName = document.getElementById('userName');
    let userAge = document.getElementById('userAge');
    let userSex = document.getElementById('userSex');
    let userStatus = document.getElementById('userStatus');
    let userEmail = document.getElementById('userEmail')
    let userPhoto = document.getElementById('userPhoto');

    // Retrieving data from localStorage
    let name = localStorage.getItem('userName');
    let age = localStorage.getItem('userAge');
    let sex = localStorage.getItem('userSex');
    let status = localStorage.getItem('userStatus');
    let email = localStorage.getItem('userEmail');
    let photo = localStorage.getItem('userPhoto');

    // Filling in HTML elements
    userName.textContent = name;
    userAge.textContent = age;
    userSex.textContent = sex;
    userStatus.textContent = status;
    userEmail.textContent = email;

    // Displaying the photo
    if (photo) {
        userPhoto.src = photo;
    } else {
        
        userPhoto.src = 'caminho_para_imagem_padrao.jpg';
    }
});
