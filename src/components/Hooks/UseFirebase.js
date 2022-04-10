import { useEffect, useState } from "react";
import {getAuth,GoogleAuthProvider,signOut, onAuthStateChanged, signInWithPopup} from 'firebase/auth'
import app from "../../firebase/Firebase.init";
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const UserFirebase = () => {
    const [user, setUser] = useState([]);
    const SingInWithGoole = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                setUser(user)
                console.log(user)
    
            }).catch(error => {
                console.log(error);
            });
    }
    const handelSingOut = () => {
        signOut(auth)
        .then(()=>{})
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, []);

    return {
        user,
        SingInWithGoole,
        handelSingOut
    }
    
}
export default UserFirebase;