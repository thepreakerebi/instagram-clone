import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <div className="mycard">
            <div className="card auth-card input-field">
                <h2>InstaClone</h2>
                <input
                    type="text"
                    placeholder="name"
                />
                <input
                    type="text"
                    placeholder="email"
                />
                <input
                    type="text"
                    placeholder="password"
                />
                <button className="btn waves-effect waves-light blue darken-1" type="submit" name="action">
                    Signup
                </button>
                <h5>
                    <Link to="/login">Already have an account?</Link>
                </h5>
            </div>
        </div>
     );
}
 
export default Login;