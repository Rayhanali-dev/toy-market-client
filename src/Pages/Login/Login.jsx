import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import title from '../../Title/Title';


const Login = () => {
    const { signIn, googleP } = useContext(AuthContext);
    const [error, setError] = useState('')
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    title('Toy Zone || Login')
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    }

    const hangleGoogle = () => {
        googleP()
        .then(result => {
            const loggedGoogle = result.user;
            console.log(loggedGoogle);
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content p-0 lg:w-[560px] flex-col">
                    <div className="text-center lg:text-left my-6">
                        <h1 className="text-5xl font-bold">Login</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' required placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' required placeholder="password" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='mb-5 -mt-3 px-8 text-center'>
                            <button onClick={hangleGoogle} className='btn w-full mb-5 btn-primary'>Sign In With Google</button>
                            <label className='my-5 block'>
                                <p className='text-center text-xl'>If You New Here! please <Link className='link link-primary' to={`/register`}>Register</Link></p>
                            </label>
                        </div>
                        <p className='text-red-400 text-center mb-5'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;