
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Serve the signup page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Path to your HTML file
});

// Handle form submission
app.post('/submit-data', (req, res) => {
    const { username, email, password } = req.body;
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    res.send('Data received successfully!');
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));


form.addEventListener('submit', function (e) {
   e.preventDefault(); // Prevent actual form submission
   const username = document.getElementById('username').value;
   const email = document.getElementById('email').value;
   const password = document.getElementById('password').value;

   // Display data on the page
   const resultContainer = document.createElement('div');
   resultContainer.innerHTML = `
       <h3>Submitted Data</h3>SSS
       <p><strong>Username:</strong> ${username}</p>
       <p><strong>Email:</strong> ${email}</p>
       <p><strong>Password:</strong> ${password}</p>
   `;
   document.body.appendChild(resultContainer);
});
S