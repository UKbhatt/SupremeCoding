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
        <div className="flex justify-center items-center mt-10">
            <form className="bg-[#1e1e1e] p-10 rounded-xl shadow-xl flex flex-col w-[300px] text-white" onSubmit={handleSubmit}>
                <h2>Create Account</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="mb-4 p-2 rounded-md border-none outline-none text-base"
                    value={formData.username}
                    onChange={handleChange}
                    required
                    />

                <input
                    type="email"
                    className="mb-4 p-2 rounded-md border-none outline-none text-base"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    />
              

                <input
                    type="password"
                    name="password"
                    className="mb-4 p-2 rounded-md border-none outline-none text-base"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    />

                <button type="submit" className="bg-blue-500 text-white border-none p-2 text-lg rounded-md cursor-pointer transition-colors duration-200 hover:bg-blue-700">Sign Up</button>

                <p className="text-xs mt-2 text-center">
                    Already have an account? <span className="text-blue-400 cursor-pointer" onClick={() => navigate('/Login')}>Sign In</span>
                </p>
            </form>
        </div>
                    </>
    );
}