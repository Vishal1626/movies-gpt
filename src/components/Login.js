import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const handleSignUp = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/ff5587c5-1052-47cf-974b-a97e3b4f0656/065df910-dec3-46ae-afa8-7ad2b52dce40/IN-en-20240506-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="loginbg"
        />
      </div>
      <form className="absolute p-10 bg-black text-white rounded-lg bg-opacity-80 w-1/4 my-60 mx-auto right-0 left-0 ">
        <h1 className="text-4xl pb-4 font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-4 w-full bg-gray-800 rounded-md"
          ></input>
        )}

        <input
          type="email"
          placeholder="Enter Email"
          className="p-2 my-4 w-full  bg-gray-800 rounded-md"
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-800 rounded-md"
        ></input>
        <button className="p-2 my-4 w-full  bg-red-700 rounded-lg border border-red-950">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-2" onClick={handleSignUp}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
