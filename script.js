const form = document.querySelector('.contact-form form');
const formMessage = document.querySelector('.form-message');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Example validation (check if fields are filled)
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const message = form.querySelector('#message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.opacity = '1';
    } else {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.style.color = 'green';
        formMessage.style.opacity = '1';

        // Example: AJAX form submission
        // Replace with actual form submission logic
        setTimeout(() => {
            form.reset();
            formMessage.style.opacity = '0';
        }, 3000); // Reset message after 3 seconds
    }
});
