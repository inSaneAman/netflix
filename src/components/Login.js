import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidity } from "../utils/validate";

const Login =() =>{
    const [isSignIn, setIsSignIn]= useState(true);
    const [errorMessage, setErrorMessage]= useState(null);

    const toggleSignIn = () =>{
        setIsSignIn(!isSignIn);
    }

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    

    const handleClick=()=>{
        const message = checkValidity(name.current.value,email.current.value, password.current.value);
        setErrorMessage(message);
    }

    return(
        <div>
            <Header/>
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg" alt="logo"/>
            </div>
            <form 
            onSubmit={(e) => e.preventDefault()}
            className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 
                className="font-semibold text-3xl py-4">{isSignIn? "Sign In":"Sign Up"}</h1>
                {!isSignIn && (
                <input 
                ref={name}
                type="text" 
                placeholder="User Name"
                className="p-4 my-2 w-full bg-gray-700"/>)}

                <input 
                ref={email} 
                type="text" 
                placeholder="Email Address"
                className="p-4 my-2 w-full bg-gray-700"/>
                
                <input 
                ref={password} 
                type="password" 
                placeholder="Password"
                className="p-4 my-4 w-full bg-gray-700"/>
                
                <p className="text-red-500 w-full rounded-lg font-semibold text-lg py-2">
                    {errorMessage}
                </p>
                <button 
                className="p-4 my-6 w-full bg-red-700 rounded-lg" 
                onClick={handleClick}>{isSignIn? "Sign In":"Sign Up"}
                </button>

                <p 
                className="py-4 cursor-pointer" 
                onClick={toggleSignIn}>{isSignIn? "New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}
                </p>
            </form>
        </div>
    )
};
export default Login;