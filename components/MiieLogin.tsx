'use client'

import React, { useState } from 'react';
import useForm from '../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


export default function MiieLogin() {

    const [passwordVisible, setPasswordVisible] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const { values, handleChange } = useForm({
        email: '',
        password: '',
      });
    
      // Handle login which returns a Json Web Token if successful
      const handleLogin = async (e: any) => {
        e.preventDefault();
        try {
          const response = await fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ values }),
          });
    
          if (response.ok) {
            const data = await response.json();
            localStorage.setItem('token', data.token);
            console.log(data.token);
          } else {
            setError('Invalid email or password');
          }
        } catch (err) {
          console.error(err);
          setError('An error occurred. Please try again.');
        }
      };

        return (

            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Login</h2>
            <form onSubmit={handleLogin} className="max-w-md mx-auto">
                <div className="mb-4 text-center">

                <div className='text-left'>
                <label htmlFor="email" className="block text-gray-900 text-sm">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={values.email}
                    onChange={handleChange}
                    className="stdInput"
                    required
                />

                <label htmlFor="password" className="block text-gray-900 text-sm">Password</label>
                <div className="password-container">
                <input
                    type={passwordVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Password"
                    value={values.password}
                    onChange={handleChange}
                    className="stdInput password-input"
                    required
                />
                <span
                className="toggle-password"
                onClick={togglePasswordVisibility}
                >
                    <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                </span>
                </div>
                </div>

                <button type="submit" className="stdButton">Login</button>
            <h3 className='text-center my-6'>Forgot your Password?</h3>
            <h3 className='text-center my-6 text-[#5752FC]'><span className='text-slate-400'>Don't have an account? </span>Sign up here!</h3>
            </div>
            </form>
            </div>
        )

}

    