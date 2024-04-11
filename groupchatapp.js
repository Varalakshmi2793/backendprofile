const express = require('express');
const bodyParser = require("body-parser");
const fs = require("fs");

const app = express();
const port = 4095;

app.use(bodyParser.urlencoded({ extended: true }));

// Function to read and parse chat messages from the file
function readMessages() {
  try {
    const data = fs.readFileSync('file.txt', 'utf8');
    return JSON.parse(data) || {};  // Return empty object if file is empty
  } catch (err) {
    console.error('Error reading messages file:', err);
    return {};
  }
}

// Function to write chat messages to the file
function writeMessages(messages) {
  try {
    fs.writeFileSync('file.txt', JSON.stringify(messages, null, 2));
  } catch (err) {
    console.error('Error writing messages file:', err);
  }
}

// Login route handler
app.get('/login', (req, res) => {
  console.log("Login form requested");
  res.send(`
    <form action="/" method="POST">
      <label for="username">Username:</label>
      <input type="text" name="username" id="username" required>
      <button type="submit">Login</button>
    </form>
  `);
});

// Message form route handler
app.get('/', (req, res) => {
  const username = localStorage.getItem('username');

  if (username) {
    const messages = readMessages();
    const messageList = Object.entries(messages).map(([sender, message]) => {
      return `<p><b>${sender}:</b> ${message}</p>`;
    }).join('');

    res.send(`
      <h2>Welcome, ${username}!</h2>
      <div id="messages">${messageList}</div>
      <form id="messageForm" action="/message" method="POST">
        <input type="text" name="message">
        <button type="submit">Send</button>
      </form>
    `);
  } else {
    res.redirect('/login');
  }
});

// Message submission route handler
app.post('/message', (req, res) => {
  const username = localStorage.getItem('username');
  const message = req.body.message;

  if (username && message) {
    const messages = readMessages();
    messages[username] = message;
    writeMessages(messages);

    console.log(`${username} sent message: ${message}`);
    res.redirect('/'); // Redirect back to chat page to show updated messages
  } else {
    res.redirect('/login');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
