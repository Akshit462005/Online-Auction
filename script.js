function validateLogin() {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (password.length !== 6) {
      document.getElementById('loginMessage').innerText = 'Password must be 6 characters long.';
      return;
    }
    if (username === 'user' && password === '123456') {
      window.location="mainpage.html"
    } else {
      document.getElementById('loginMessage').innerText = 'Invalid username or password.';
    }
  }
  