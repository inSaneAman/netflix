import {auth} from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {addUser, removeUser} from "../utils/userSlice";
import { LOGO } from "../utils/constants";
const Header =() =>{

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user= useSelector(store => store.user);
    const handleSignOut=()=>{
        signOut(auth).then(() => {})
        .catch((error) => {
            navigate("/error");
          });          
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email:email, displayName: displayName, photoURL: photoURL}));
              navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
          });

          return ()=>unsubscribe();
    },[]);

    return(
        <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src={LOGO} alt="logo"/>

            {user && (
                <div className="flex p-2">
                <img className="h-12 w-12 rounded-lg"src={user?.photoURL}alt="User Icon"/>
                <button onClick={handleSignOut}className="font-bold text-white px-2">Sign Out</button>
            </div>)}
        </div>
    )
};
export default Header;