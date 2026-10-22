function saveUserData(){
      let username = document.getElementById('username').value;
      let email = document.getElementById('email').value;
      let password = document.getElementById('password').value;

      localStorage.setItem('username', username);
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
}

// Async and await

async function fetchUserData() {
    try {
        let response = await fetch('https://api.example.com/userdata');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}

await fetchUserData();