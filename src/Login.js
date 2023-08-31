import React, { useState } from 'react';
import { Outlet , Link } from 'react-router-dom';

const LoginPage = () => {
  const [loginType, setLoginType] = useState(null);

  const handleLoginType = (type) => {
    setLoginType(type);
  };

  return (
    <>
    <Outlet/>
    <div className="container my-5">

      <div className="row">
        <div className="col-md-6 offset-md-3">
          {!loginType ? (
            <div>
              <h2 className="text-center mb-4">Login</h2>
              <button
                className="btn btn-primary btn-block mb-3 mx-3"
                onClick={() => handleLoginType('user')}
              >
                Login as User
              </button>
              <button
                className="btn btn-secondary btn-block"
                onClick={() => handleLoginType('admin')}
              >
                Login as Admin
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-center mb-4 p-3">Login as {loginType === 'user' ? 'User' : 'Admin'}</h2>
              <form>
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Login</button>
              </form>
              <button className="btn btn-link mt-3">Forgot Password?</button>
             <p className="mt-3">Don't have an account? <Link to='/login/register'>  <button className="btn btn-link" onClick={() => setLoginType(null)}>Register here</button> </Link></p>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;

