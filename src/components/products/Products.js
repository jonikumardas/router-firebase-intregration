import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase/Firebase.init';
const auth=getAuth(app)

const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>hay this is products components</h1>
            {
                <h2> this is my autibtication :{user.email}</h2>
            }
        </div>
    );
};

export default Products;