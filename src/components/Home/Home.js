import { getAuth } from 'firebase/auth';
import React from 'react';
// import UserFirebase from '../Hooks/UseFirebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase/Firebase.init';
const auth=getAuth(app)


const Home = () => {
    // const{user}=UserFirebase()
    const[user]=useAuthState(auth)
    return (
        <div>
            <h1>This is home </h1>
            <h4> current User:{user ?user.displayName: "nonody"}</h4>
        </div>
    );
};

export default Home;