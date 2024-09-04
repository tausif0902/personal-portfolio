// JavaScript to handle form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received. We will contact you shortly.`);

    // Reset the form
    document.getElementById('contact-form').reset();
});
