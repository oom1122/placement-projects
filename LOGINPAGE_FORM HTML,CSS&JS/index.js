document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const user = document.getElementById('User').value.trim();
    const pass = document.getElementById('Pass').value.trim();
    const message = document.getElementById('result');
  
    if (user === 'java_batch' && pass === '@1234') {
      message.textContent = 'Login successful';
      message.className = 'success';
    } else {
      message.textContent = 'Invalid credentials';
      message.className = 'failed';
    }
  }); 