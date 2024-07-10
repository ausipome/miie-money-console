'use client'

import useForm from '../hooks/useForm';

export default function MiieLogin() {

    const { values, handleChange } = useForm({
        email: '',
        password: '',
      });
    
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            console.log(values); // You can use the form data here
        };

        return (

            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-slate-300">Login</h2>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <div className="mb-4">
               
                <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />

                <label htmlFor="password" className="block text-gray-600 text-sm font-semibold mb-2">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    required
                />

                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold p-2 rounded mt-4">Login</button>
            <h3 className='text-center text-red-500'>Forgot Password</h3>
            <h3 className='text-center text-pink-600'>Don't have an account? Sign up here!</h3>
            </div>
            </form>
            </div>
        )

}

    