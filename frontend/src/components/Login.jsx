import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Login component handles user authentication
// Connects to backend API to validate credentials and obtain JWT token authentication
// Stores token and user info in local storage upon successful login

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Handles form submission for user login
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload on submit
    try { 
      // Call the login API endpoint
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // Parse the JSON response
      const data = await response.json();

      if (response.ok) { // Successful login
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redirect to home page after login
        navigate('/');

        // Reload to update navigation with user info
        window.location.reload();
      } else {
        setError(data.message || 'Login failed');
      }
    } catch (error) {
      setError('Network error - please try again');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div className="error">{error}</div>}
        
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button type="submit">Login</button>

        {/* Demo credentials for testing */}
        <div className="demo-credentials">
          <p><strong>Demo Admin:</strong></p>
          <p>Email: admin@portfolio.com</p>
          <p>Password: admin123</p>
        </div>
      </form>
    </div>
  );
};

export default Login;