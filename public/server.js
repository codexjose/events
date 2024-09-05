const express = require('express');
const app = express();

// Serve static files from the public directory
app.use(express.static('public'));

let confirmedAttendees = [];

app.use(express.json());

app.post('/confirm-attendance', (req, res) => {
    confirmedAttendees.push({ id: confirmedAttendees.length + 1, status: "Confirmed" });
    res.json({ success: true });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
