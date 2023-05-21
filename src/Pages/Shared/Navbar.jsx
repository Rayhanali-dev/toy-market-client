import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import logo from '../../assets/favicon.jpeg'

const Navbar = () => {

    const { user, loggedOut } = useContext(AuthContext);

    const handleLogOut = () => {
        loggedOut()
            .then(() => { })
            .catch(error => {
                console.log(error.message);
            })
    }

    return (
        <div>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown absolute right-0">
                        <label tabIndex={0} className="btn mt-3 btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu right-0 menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to={`/blog`}>Blog</Link>
                            </li>
                            <li><Link to={`/allToys`}>All Toys</Link></li>
                            {
                                user && <>
                                    <li><Link to={`/myToy`}>My Toy</Link></li>
                                    <li><Link to={`/addToy`}>Add Toy</Link></li>
                                </>
                            }
                            <div className='flex py-7 justify-center'>
                                {
                                    user ? <>
                                        <div className='w-12 h-12 rounded-full mr-6 bg-slate-700'>
                                            <img className='w-full h-full rounded-full' src={user.photoURL} alt="" />
                                        </div>
                                        <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
                                    </> : <button className='btn btn-primary'><Link to={`/login`}>Login</Link></button>
                                }
                            </div>
                        </ul>
                    </div>
                    <Link to={`/`} className="btn btn-ghost flex gap-4 normal-case text-xl"><img className='w-10 h-10' src={logo} alt="" /> Toy Zone</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to={`/blog`}>Blog</Link>
                        </li>
                        <li><Link to={`/allToys`}>All Toys</Link></li>
                        {
                            user && <>
                                <li><Link to={`/myToy`}>My Toy</Link></li>
                                <li><Link to={`/addToy`}>Add Toy</Link></li>
                            </>
                        }
                    </ul>
                </div>
                <div className="navbar-end hidden lg:block">
                    <div className='flex justify-end'>
                        {
                            user ? <>
                                <div className='w-12 h-12 rounded-full mr-6 bg-slate-700'>
                                    <img className='w-full h-full rounded-full' src={user.photoURL} alt="" />
                                </div>
                                <button onClick={handleLogOut} className='btn btn-primary'>Log Out</button>
                            </> : <button className='btn btn-primary'><Link to={`/login`}>Login</Link></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;