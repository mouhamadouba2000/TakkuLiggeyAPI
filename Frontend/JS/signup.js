document.addEventListener('DOMContentLoaded', () => {
    const isWorkerCheckbox = document.getElementById('is-worker');
    const workerTypesDiv = document.getElementById('worker-types');
    const workTypesSelect = document.getElementById('work-types');
    const signupForm = document.getElementById('signup-form');

    // Charger les types de travail depuis le backend
    fetch('https://localhost:5001/api/workers/work-types')
        .then(response => response.json())
        .then(data => {
            data.forEach(type => {
                const option = document.createElement('option');
                option.value = type.id;
                option.textContent = type.name;
                document.getElementById('work-types').appendChild(option);
            });
        })
        .catch(error => console.error('Error fetching work types:', error));


    // Afficher les types de travail si l'utilisateur coche la case
    isWorkerCheckbox.addEventListener('change', () => {
        workerTypesDiv.style.display = isWorkerCheckbox.checked ? 'block' : 'none';
    });

    // Gestion du formulaire d'inscription
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Vérification du mot de passe
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must contain at least one uppercase, one lowercase, one number, and one special character.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        const userData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            passwordHash: password,
            role: isWorkerCheckbox.checked ? 'Worker' : 'Client',
            workTypes: Array.from(workTypesSelect.selectedOptions).map(option => option.value)
        };

        // Envoi des données au backend
        fetch('https://localhost:5001/api/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        })
            .then(response => {
                if (response.ok) {
                    alert('Signup successful!');
                    window.location.href = 'login.html';
                } else {
                    return response.text().then(text => { throw new Error(text); });
                }
            })
            .catch(error => alert('Error: ' + error.message));
    });
});
