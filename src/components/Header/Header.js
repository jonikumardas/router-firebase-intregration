import React from 'react';
import { Link } from 'react-router-dom';
import UserFirebase from '../Hooks/UseFirebase';
import './Header.css';

const Header = () => {
    const { user, handelSingOut }=UserFirebase()
    return (
        <div>
            <nav className='navber'>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products </Link>
                <Link to='/about'>About</Link>
                {
                    user?.uid
                        ?
                    <button onClick={handelSingOut}> sing out </button>
                    :
                    <Link to='/login'>Log In </Link>
                }
                <Link to='/registation'>Registation</Link>
            </nav>
            
        </div>
    );
};

export default Header;