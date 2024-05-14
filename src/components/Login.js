import { useRef, useState } from "react";
import Header from "./Header";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNo,
} from "../utils/validation";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [nameErrorMsg, setNameErrorMsg] = useState(null);
  const [phoneNoErrorMsg, setPhoneNoErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);

  const name = useRef(null);
  const phoneno = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = () => {
    console.log(name);
    !isSignIn &&
      setNameErrorMsg(
        name.current.value === ""
          ? "Please Enter Name"
          : validateName(name.current.value)
      );

    !isSignIn &&
      setPhoneNoErrorMsg(
        phoneno.current.value === ""
          ? "Please Enter Phone Number"
          : validatePhoneNo(phoneno.current.value)
      );
    setEmailErrorMsg(
      email.current.value === ""
        ? "Please Enter Email"
        : validateEmail(email.current.value)
    );
    setPasswordErrorMsg(
      password.current.value === ""
        ? "Please Enter Password"
        : validatePassword(password.current.value)
    );
  };

  const toggleignUp = () => {
    setIsSignIn(!isSignIn);
    setEmailErrorMsg(null);
    setNameErrorMsg(null);
    setPasswordErrorMsg(null);
    setPhoneNoErrorMsg(null);
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
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-10 bg-black text-white rounded-lg bg-opacity-80 w-1/4 my-60 mx-auto right-0 left-0 "
      >
        <h1 className="text-4xl pb-4 font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-2 my-4 w-full bg-gray-800 rounded-md"
          ></input>
        )}
        <p className="text-red-500 font-medium">{nameErrorMsg}</p>

        {!isSignIn && (
          <input
            ref={phoneno}
            type="text"
            placeholder="Enter Phone Number"
            className="p-2 my-4 w-full bg-gray-800 rounded-md"
          ></input>
        )}
        <p className="text-red-500 font-medium">{phoneNoErrorMsg}</p>

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-2 my-4 w-full  bg-gray-800 rounded-md"
        ></input>
        <p className="text-red-500 font-medium">{emailErrorMsg}</p>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-800 rounded-md"
        ></input>
        <p className="text-red-500 font-medium">{passwordErrorMsg}</p>
        <button
          className="p-2 my-4 w-full  bg-red-700 rounded-lg border border-red-950"
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer py-2" onClick={toggleignUp}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
