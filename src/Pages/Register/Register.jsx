import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const { createUser, userUpdateProfile, loggedOut } = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoURL = form.photo.value;
        form.reset();
        console.log(name, email, password, photoURL);
        createUser(email, password)
            .then(result => {
                logOut();
                const createdUser = result.user;
                console.log(createdUser);
                profileUpdate(createdUser, name, photoURL);
            })
            .catch(error => {
                setError(error.message)
                console.log(error.message);
            })
    }

    const profileUpdate = (user, name, photoUrl) => {
        userUpdateProfile(user, name, photoUrl)
        .then(() => {
            console.log('success user created');
        })
        .catch(error => {
            console.log(error.message);
        })
    }

    const logOut = () => {
        loggedOut()
        .then(() => {})
        .catch(error => {
            console.log(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content p-0 lg:w-[560px] flex-col">
                    <div className="text-center lg:text-left my-6">
                        <h1 className="text-5xl font-bold">Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="name" className="input input-bordered" />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <label className="label">
                                <p className='text-center text-xl'>Already have an account? please <Link className='link link-primary' to={`/login`}>Login</Link></p>
                            </label>
                        </form>
                        <p className='text-center mb-4 text-red-500'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;