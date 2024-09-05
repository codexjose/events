// Handle the confirmation button click
document.getElementById("confirm-btn").addEventListener("click", function() {
    fetch("http://localhost:3000/confirm-attendance", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        const responseMsg = document.getElementById("response-msg");
        if (data.success) {
            responseMsg.textContent = "Your attendance has been confirmed!";
            responseMsg.style.color = "green";
        } else {
            responseMsg.textContent = "Something went wrong. Please try again.";
            responseMsg.style.color = "red";
        }
    })
    .catch(error => {
        document.getElementById("response-msg").textContent = "Error confirming attendance.";
        document.getElementById("response-msg").style.color = "red";
    });
});
