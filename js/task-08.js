const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmitForm);
function onSubmitForm (event) {
    event.preventDefault();
    const {elements: { email, password }} = event.currentTarget;
    if (email.value === '' || password.value === '') 
    {
        alert('Всі поля повинні бути заповнені!');
        return;
    }
    console.log({ email:email.value, password:password.value });
    form.reset();
}