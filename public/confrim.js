app.post('/confirm-attendance', (req, res) => {
    confirmedAttendees.push({ id: confirmedAttendees.length + 1, status: "Confirmed" });
    console.log("Confirmed Attendees:", confirmedAttendees); // Log confirmed attendees
    res.json({ success: true });
});
