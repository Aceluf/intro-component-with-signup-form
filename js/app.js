// Variables
const firstName = document.getElementsByName('firstName'),
    lastName = document.getElementsByName('lastName'),
    email = document.getElementsByName('email'),
    password = document.getElementsByName('password'),
    form = document.querySelector('.form'),
    icons = document.getElementsByClassName('icon'),
    errorTexts = document.getElementsByClassName('error-text'),
    nameFormat = /[a-zA-Z]/;








//Event listeners

eventListeners();

function eventListeners() {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // firstName verify
        if (!validateName(firstName[0].value)) {
            icons[0].classList.remove('icon-hidden');
            errorTexts[0].classList.remove('error-text-hidden');
        } else {
            icons[0].classList.add('icon-hidden');
            errorTexts[0].classList.add('error-text-hidden');
        };
        // lastName verify
        if (!validateName(lastName[0].value)) {
            icons[1].classList.remove('icon-hidden');
            errorTexts[1].classList.remove('error-text-hidden');
        } else {
            icons[1].classList.add('icon-hidden');
            errorTexts[1].classList.add('error-text-hidden');
        };
        // email verify
        if (!validateEmail(email[0].value)) {
            icons[2].classList.remove('icon-hidden');
            errorTexts[2].classList.remove('error-text-hidden');
        } else {
            icons[2].classList.add('icon-hidden');
            errorTexts[2].classList.add('error-text-hidden');
        };
        // password verify
        if (password[0].value === '') {
            icons[3].classList.remove('icon-hidden');
            errorTexts[3].classList.remove('error-text-hidden');
        } else {
            icons[3].classList.add('icon-hidden');
            errorTexts[3].classList.add('error-text-hidden');
        };

        
    });
}



// Functions

function validateEmail(email) 
{
    const mailformat = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return mailformat.test(email);

}

function validateName(name) {
    return nameFormat.test(name);
}


