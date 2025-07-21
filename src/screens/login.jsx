import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SimpleNav from '../components/simpleNav';
import '../App.css';

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Please enter a valid email address');
            return;
        }

        console.log('Logining In with:', formData);
        alert('Login successful!');
        navigate('/');

    }
    return (
        <>
            <SimpleNav />
            <div className='signup-container'>
                <form className='signup-form' onSubmit={handleSubmit} >
                    <h2>Login Account</h2>

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

                    <button type="submit">Log-In</button>
                    <p className="signin-link">
                        Don't have an account? <span onClick={() => navigate('/SignUp')}>Register</span>
                    </p>
                </form>

            </div>
        </>
    )
}