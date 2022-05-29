const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(loginForm);
    const email = formData.get('email');
    const password = formData.get('password');

    if(email === '' || password === '') {
        return alert('Please fill in all fields');
    } else {
        loginForm.reset();
    }
    const data = {
        Email: email,
        Password: password,
    };
    console.log(data);
}
