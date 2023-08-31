import React, { useState } from 'react';
import Navbar from './Navbar';


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const handleSignup = () => {
    // Basic password validation
    if (password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    }

    // You can implement your registration logic here
    console.log('Registering with:', username, email, contact, password);
  };

  return (

    <>
    <Navbar></Navbar>
   
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h4 className="text-center">Sign Up</h4>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="contact" className="form-label">Contact Number</label>
                  <input type="tel" className="form-control" id="contact" value={contact} onChange={(e) => setContact(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Password</label>
                  <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                  <input type="password" className={`form-control ${password !== confirmPassword ? 'is-invalid' : ''}`} id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary" onClick={handleSignup}>Sign Up</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default SignUp;
