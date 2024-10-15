import { useState } from 'react';
import './styles/Login.css'; // Import the CSS file

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple form validation
        if (!email || !password) {
            setError('Both email and password are required');
            return;
        }
        setError('');

        // Add logic for sending data to API here (if applicable)
        console.log('Logging in with:', { email, password });
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="login-form-group">
                    <input
                        type="email"
                        id="email"
                        placeholder=" Email / Username"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="login-form-input"
                    />
                </div>
                <div className="login-form-group">
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="login-form-input"
                    />
                </div>

                {/* New Flexbox container for Remember Me and Forgot Password */}
                <div className="remember-forgot-container">
                    <div className="remember-me-container">
                        <label>
                            <input
                                type="checkbox"
                                className="remember-me-checkbox"
                            />
                            Remember Me
                        </label>
                    </div>
                    <div className="forgot-password-container">
                        <a href="#" className="forgot-password-link">Forgot Password?</a>
                    </div>
                </div>

                {error && <p className="login-error-message">{error}</p>}
                <button type="submit" className="login-button">
                    Login
                </button>
            </form>
            <br />
            <br />
            <div className="register-container">
                <p>Do you have an account? <a href="#" className="create-account-link">Register</a></p>
            </div>
        </div>
    );
}

export default Login;
