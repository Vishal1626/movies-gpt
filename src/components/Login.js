import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import {
  validateEmail,
  validateName,
  validatePassword,
  validatePhoneNo,
} from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

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
    // !isSignIn &&
    //   setNameErrorMsg(
    //     name.current.value === ""
    //       ? "Please Enter Name"
    //       : validateName(name.current.value)
    //   );
    // if (nameErrorMsg) return;

    // !isSignIn &&
    //   setPhoneNoErrorMsg(
    //     phoneno.current.value === ""
    //       ? "Please Enter Phone Number"
    //       : validatePhoneNo(phoneno.current.value)
    //   );
    // if (phoneNoErrorMsg) return;

    const nameValidationRes = validateName(name.current.value);
    setNameErrorMsg(nameValidationRes);
    if (nameValidationRes) return;

    const phoneNoValidationRes = validatePhoneNo(phoneno.current.value);
    setPhoneNoErrorMsg(phoneNoValidationRes);
    if (phoneNoValidationRes) return;

    const emailValidationRes = validateEmail(email.current.value);
    setEmailErrorMsg(emailValidationRes);
    if (emailValidationRes) return;

    const passValidationRes = validatePassword(password.current.value);
    setPasswordErrorMsg(passValidationRes);
    if (passValidationRes) return;

    if (!isSignIn) {
      //sign UP new the user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
    } else {
      //Sign in existing user

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
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
        className="absolute p-8 bg-black text-white rounded-lg bg-opacity-80 w-1/4 m-60 mx-auto right-0 left-0 "
      >
        <h1 className="text-4xl pb-4 font-semibold">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="p-2 mt-4 w-full bg-gray-800 rounded-md"
          ></input>
        )}
        <p className="text-red-500 font-normal">{nameErrorMsg}</p>

        {!isSignIn && (
          <input
            ref={phoneno}
            type="tel"
            placeholder="Enter Phone Number"
            className="p-2 mt-4 w-full bg-gray-800 rounded-md"
          ></input>
        )}
        <p className="text-red-500 font-normal">{phoneNoErrorMsg}</p>

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="p-2 mt-4 w-full  bg-gray-800 rounded-md"
        ></input>
        <p className="text-red-500 font-normal">{emailErrorMsg}</p>

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 mt-4 w-full  bg-gray-800 rounded-md"
        ></input>
        <p className="text-red-500 font-normal">{passwordErrorMsg}</p>
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
