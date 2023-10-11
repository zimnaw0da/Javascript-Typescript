document.addEventListener('DOMContentLoaded', () => {
    const signupButton = document.querySelector('.signup-btn');
    signupButton.addEventListener('click', signupUser);
  });
  
  const usersDatabase = [
    {
      // username: 'exampleUser',
      // password: 'Example1234', // its only example you can set your own value
      // userCode: '1234'
    }
  ];
  
  function signupUser() {
    const enteredUsername = document.getElementById('login').value;
    const enteredPassword = document.getElementById('password').value;
    const enteredUserCode = document.getElementById('usercode').value;
  
    const user = usersDatabase.find(
      user => user.username === enteredUsername &&
              user.password === enteredPassword &&
              user.userCode === enteredUserCode
    );
  
    if (user) {
      alert('Signup successful. Redirecting to another page...');
      window.location.href = 'Website/your_website'; 
    } else {
      alert('Invalid signup data. Please try again.');
    }
  }
  
