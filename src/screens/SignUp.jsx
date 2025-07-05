import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SimpleNav  from '../components/simpleNav';
import '../App.css';

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        console.log('Signing up with:', formData);
        alert('Sign-up successful!');

        navigate('/');
    };

    return (
        <>
              <SimpleNav />
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Create Account</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
              

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />

                <button type="submit">Sign Up</button>

                <p className="signin-link">
                    Already have an account? <span onClick={() => navigate('/Login')}>Sign In</span>
                </p>
            </form>
        </div>
                    </>
    );
}