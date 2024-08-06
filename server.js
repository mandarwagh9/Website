const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to handle form submission
app.post('/submit', (req, res) => {
    const email = req.body.email;

    // Append the email to a file
    const filePath = path.join(__dirname, 'emails.txt');
    fs.appendFile(filePath, email + '\n', (err) => {
        if (err) {
            console.error('Error saving email:', err);
            res.status(500).send('Error saving email');
        } else {
            console.log('Email saved:', email);
            res.status(200).send('Form submitted successfully');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
