//Add a label to each of the fields: unsername, password,confirme password
document.getElementById('username')
    .insertAdjacentHTML('beforeBegin', '<label for="username">Username: </label>');
document.getElementById('password')
    .insertAdjacentHTML('beforeBegin', '<label for="password">Password: </label>');

document.getElementById('confirmPassword')
    .insertAdjacentHTML('beforeBegin', '<label for="confirmPasswor">ConfirmPassword: </label>');
//Adding a required validaton to each input that shows an error massage next to the  entry if it does any text entered
const checkInput = (event) => {
    const errorElement = Array.from(event.target.parentNode.querySelectorAll('span'));
    if (event.target.value === '' && !errorElement.length) {
        event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Required</span>')
    }
    if (errorElement && event.target.value !== '') {
        errorElement.forEach(elem => elem.remove());
    }
};
documebt.getElementById('username')
    .addEventlistener('blur', checkInput);
documebt.getElementById('password')
    .addEventlistener('blur', checkInput);
documebt.getElementById('confirmPassword')
    .addEventlistener('blur', checkInput);
//Adding a further validation to check if the user input in the password and confirm password inputs match.Show an error message if they do not
document.getElementById('confirmPassword')
    .addEventListener('blur', (event) => {
        if (event.target.value !== document.getElementById('password').value) {
            event.target.insertAdjacentHTML('afterEnd', '<span class="text-danger">Passwords Should Match</span>');

        }

    });
//ensuring the register button is disabled until the user has entered valid data into all the input fields .once they have the registration button should then be enabled
const btn = document.querySelector('button');
btn.setAttribute('disabled', 'disabled');
document.getElementById('registrationForm')
    .addEventListener('change', (event) => {
        const formIsFilled = Array.from(document.querySelectorAll('input'))
            .every(input => input.value);
        if (formIsFilled) {
            btn.removeAttribute('disabled');
        } else {
            btn.setAttribute('disabled', 'disabled');
        }
    });
// when the user clicks the register button,a message should be displayed informing them of a succesful user registration
const form = document.getElementById('registrationForm');
form.addEventlistener('submit', (event) => {
    event.preventDefault();
    const alert = document.createElement('div');
    alert.classList.add('alert', 'alert-success');
    alert.innerText = 'User registered successfuly';
    form.prepend(alert);
});
