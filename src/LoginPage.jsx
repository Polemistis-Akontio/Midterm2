import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const goToLoginPage = () => {
    const username = "user";
    const password = "password";

    if (inputUsername === username && inputPassword === password) {
      navigate('/landing');
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
      <h1>Login Here</h1>
      <p>This is the Login Page.</p>
      <label htmlFor="username">Username:</label>
      <input 
        type="text" 
        id="username" 
        value={inputUsername} 
        onChange={(e) => setInputUsername(e.target.value)} 
      />
      <label htmlFor="password">Password:</label>
      <input 
        type="password" 
        id="password" 
        value={inputPassword} 
        onChange={(e) => setInputPassword(e.target.value)} 
      />
      <button onClick={goToLoginPage}>Login to Qualifier Quiz</button>
    </div>
  );
};

export default LoginPage;
