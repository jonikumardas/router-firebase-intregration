import React from 'react';
import UserFirebase from '../Hooks/UseFirebase';

const Home = () => {
    const{user}=UserFirebase()
    return (
        <div>
            <h1>This is home </h1>
            <h4> current User:{user ?user.displayName: "nonody"}</h4>
        </div>
    );
};

export default Home;