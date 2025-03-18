// StudentSignIn.js
import React, { useState } from 'react';
import { StudentSignInContainer, FormContainer, InputField, SubmitButton } from '../styles/StudentSignInStyles';

const StudentSignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // For demonstration purposes, we'll directly navigate to the student dashboard route
    // Replace this with your actual sign-in logic
    console.log('Student Sign In:', { email, password });
  };

  return (
    <StudentSignInContainer>
      <h2>Student Sign In</h2>
      <FormContainer>
        <InputField
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> 
        {/* Use Link component to navigate to student dashboard */}
        <SubmitButton to="/student/dashboard" onClick={handleSignIn}>Sign In</SubmitButton>
      </FormContainer>
    </StudentSignInContainer>
  );
};

export default StudentSignIn;
{/*import React, { useState } from 'react';
import './Loginpage.css';
import logo from './logo.png';
import image1 from './image1.png'; // Add your first image
import image2 from './image2.jpeg'; // Add your second image

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in both fields.');
      return;
    }

    if (username === '22BQ1A0577@vvit.net' && password === '123456') {
      setError('');
      alert('Login Successful!');
      window.location.href =
        'https://learning.ccbp.in/frontend-code-playground/a7ffd485-6ec6-438e-84df-a6300fe96a6b';
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="container">
      <div className="logo-section">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="image-section">
        <img src={image1} alt="Image 1" className="side-image" />
        <img src={image2} alt="Image 2" className="side-image" />
      </div>
      <div className="login-section">
        <h1>Login</h1>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;*/}