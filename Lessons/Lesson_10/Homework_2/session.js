document.addEventListener("DOMContentLoaded", function() {
    let sessions = JSON.parse(localStorage.getItem('sessions')) || [];
    let sessionsContainer = document.getElementById('sessionsContainer');
    sessions.forEach(function(session, index) {
        let sessionDiv = document.createElement('div');
        sessionDiv.classList.add('session');
        sessionDiv.innerHTML = "<strong>Session " + (index + 1) + ":</strong> " + session.date;
        sessionsContainer.appendChild(sessionDiv);
    });
});