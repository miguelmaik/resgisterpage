
let name = document.getElementById('txt_name');
let age = document.getElementById('num_age');
let sex = document.getElementById('sex_option');
let status = document.getElementById('marital_status');
let pic = document.getElementById('uploadFile')
let email = document.getElementById('email')
let password = document.getElementById('key');
let passwordAgain = document.getElementById('keyAgain');

function send(){ 
  if (
    name.value === '' ||
    age.value === '' ||
    sex.value === 'Option' ||
    status.value === 'options' ||
    pic.value === '' ||
    email.value === '' ||
    password.value === '' ||
    passwordAgain.value === ''
) {
    alert('Por favor, preencha todos os campos.');
    return false;
} if(password.value !== passwordAgain.value){
      passwordAgain.setCustomValidity("senhas diferentes!")
      passwordAgain.reportValidity();
      return false;
    } else{
      passwordAgain.setCustomValidity("");
      const file = pic.files[0];
        const reader = new FileReader();
        reader.onloadend = function() {
            // Storing data in localStorage
            localStorage.setItem('userName', name.value);
            localStorage.setItem('userAge', age.value);
            localStorage.setItem('userSex', sex.value);
            localStorage.setItem('userStatus', status.value);
            localStorage.setItem('userEmail', email.value);
            localStorage.setItem('userPassword', password.value);
            localStorage.setItem('userPhoto', reader.result); // Stores the photo in base64
        };
        reader.readAsDataURL(file);
        return true;
    }
  }

  passwordAgain.addEventListener('input', send);


  