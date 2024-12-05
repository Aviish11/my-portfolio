const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');

const button = document.getElementById('button');
const details = document.getElementById('details');

const toggleThemeButton = document.getElementById('toggleTheme');



form.addEventListener('submit', function(event) {
    nameError.textContent = '';

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'Please Enter Your Name';
        event.preventDefault();
    }

    if (emailInput.value.trim() == ''){
        emailError.textContent = "Please Enter Your Email.";
        event.preventDefault();
    }  else if (!validateEmail(emailInput.value)) {
        emailError.textContent = 'Please Enter a Valid Email Address';
        event.preventDefault();}
    


});

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
return re.test(String(email).toLowerCase());
}

toggleThemeButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

});