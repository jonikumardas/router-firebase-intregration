import React from 'react';

const Registation = () => {
    return (
        <div>
            <h2>please Registaion </h2>
            <div>
                <button>Registaion with gmail</button> 
            </div>
            <br />
            <input type="text" placeholder='Enter your name' /> 
            <br />
            <input type="text" placeholder='please Enter Email' />
            <br /> 
            <input type="password" placeholder='Please Enter password' />
            <br />
            <button type="submit">Registaion</button>

        </div>
    );
};

export default Registation;