import React from 'react';

const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center " style={{ height: '70vh' }}>
      <div className="card shadow-lg p-4" style={{ width: '30%', height: '500px' }}>
        <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li className="nav-item" role="presentation">
            <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
              aria-controls="pills-login mb-3" aria-selected="true">Login Form</a>
          </li>
        </ul>
        <form>
          <div className="form-outline mb-4">
            <input type="email" id="loginName" className="form-control" />
            <label className="form-label" htmlFor="loginName">Email or username</label>
          </div>
          <div className="form-outline mb-4">
            <input type="password" id="loginPassword" className="form-control" />
            <label className="form-label" htmlFor="loginPassword">Password</label>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary btn-block col-4">Sign in</button>
            <div className="text-center mt-3">
              <p>Not a member? <a href="Register">Register</a></p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
