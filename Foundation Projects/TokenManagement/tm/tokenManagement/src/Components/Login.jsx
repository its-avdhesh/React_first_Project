import React from 'react';
import axios from 'axios';  // Importing axios

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errorMessage, setErrorMessage] = React.useState(''); // For error handling

  const handleSubmit = () => {
    const payload = {
      email: email,
      password: password
    };

    axios.post('https://api.escuelajs.co/api/v1/auth/login', payload)
      .then((response) => {
        localStorage.setItem('token',JSON.stringify(response.data.access_token));  
        alert('Login Successful');
        console.log("Login Successful", response);
        // Handle response or store token here
     })
      .catch((error) => {
        alert.error('Login Failed');
        console.log("Login Failed", error);
        setErrorMessage('Login Failed. Please check your credentials!');
      });
  };

  return (
    <>
      <div className="bg-gray-400 p-6 m-0">
        <h1 className="bg-gray-700 text-3xl text-white p-3 shadow-md m-0">
          Login Page
        </h1>

        <div className="space-y-3">
          {/* Email Field */}
          <div className="p-3">
            <p className="inline-block w-24 text-left m-0">Email:</p>
            <input 
              onChange={(e) => setEmail(e.target.value)} 
              type="email" 
              className="border rounded-md shadow-md p-1" 
              value={email} 
            />
          </div>

          {/* Password Field */}
          <div className="p-3">
            <p className="inline-block w-24 text-left m-0">Password:</p>
            <input 
              onChange={(e) => setPassword(e.target.value)} 
              type="password" 
              className="border rounded-md shadow-md p-1" 
              value={password} 
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <div className="p-3 text-red-600">
              <p>{errorMessage}</p>
            </div>
          )}

          {/* Login Button */}
          <div className="p-3">
            <button 
              onClick={handleSubmit} 
              className="bg-green-700 text-white px-4 py-2 shadow-md m-0"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
