const express = require('express');
const app = express();

// Tell Express to serve static files from the 'public' folder
app.use(express.static('public'));

let confirmedAttendees = [];

// Parse incoming JSON requests
app.use(express.json());

app.post('/confirm-attendance', (req, res) => {
    confirmedAttendees.push({ id: confirmedAttendees.length + 1, status: "Confirmed" });
    res.json({ success: true });
});

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
