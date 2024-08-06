document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const responseMessage = document.getElementById('responseMessage');

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    })
    .then(response => response.text())
    .then(data => {
        responseMessage.textContent = 'Thank you for contacting us! We will get back to you shortly.';
        // Clear the form
        document.getElementById('email').value = '';
    })
    .catch(error => {
        console.error('Error:', error);
        responseMessage.textContent = 'There was an error submitting your form. Please try again later.';
    });
});
