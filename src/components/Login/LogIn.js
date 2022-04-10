import React from 'react';
import UserFirebase from '../Hooks/UseFirebase';

const LogIn = () => {
    const{SingInWithGoole}=UserFirebase()
    return (
        <div>
            <h2>Please log in </h2>
            <div>
                <button onClick={SingInWithGoole}>Log in with gmail</button> 
            </div>
            <br />
            <input type="text" placeholder='please Enter Email' /><br />

            <input type="password" placeholder='Please Enter password' />
            <br />
           
            <button type="submit">Log in</button>

        </div>
    );
};

export default LogIn;