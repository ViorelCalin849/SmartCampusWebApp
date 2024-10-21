import { useState } from 'react';
import './styles/register.css'; // Import the CSS file
import { Link } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic form validation
        if (!name || !email || !password || !confirmPassword) {
            setError('All fields are required');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        setError('');

        // Add your registration logic here
        console.log('Registering user with:', { name, email, password });
    };

    return (
        <div className="register-container">
            <h2 className="register-heading">Register</h2>
            <form onSubmit={handleSubmit}>
                <div className="register-form-group">
                    <input
                        type="text"
                        id="name"
                        placeholder = "Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="register-form-input"
                    />
                </div>
                <div className="register-form-group">
                    <input
                        type="email"
                        id="email"
                        placeholder = "Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="register-form-input"
                    />
                </div>
                <div className="register-form-group">
                    <input
                        type="password"
                        id="password"
                        placeholder = "Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="register-form-input"
                    />
                </div>
                <div className="register-form-group">
                    <input
                        type="password"
                        id="confirmPassword"
                        placeholder = "Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="register-form-input"
                    />
                </div>

                {error && <p className="register-error-message">{error}</p>}
                <button type="submit" className="register-button">Register</button>
            </form>
            <p>Already have an account? <Link to="/login" className="login-link">Login</Link></p>
        </div>
    );
}

export default Register;
    