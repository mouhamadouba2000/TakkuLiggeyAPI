document.getElementById('login-form').addEventListener('submit', (event) => {
    event.preventDefault();

    const loginData = {
        email: document.getElementById('email').value,
        passwordHash: document.getElementById('password').value
    };

    fetch('https://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData)
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                return response.text().then(text => { throw new Error(text); });
            }
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            alert('Login successful!');
            window.location.href = 'dashboard.html';
        })
        .catch(error => alert('Error: ' + error.message));
});
