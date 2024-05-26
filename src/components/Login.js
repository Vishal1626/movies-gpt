import { useRef, useState } from "react";
import Header from "./Header";
import {
  validateEmail,
  validateName,
  validatePassword,
} from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import LOGIN_BG_IMAGE from "../img/signinbgimage.jpg";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [nameErrorMsg, setNameErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [signInErrorMsg, setSignInErrorMsg] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormSubmit = () => {
    const signInButton = document.getElementById("signInButton");
    if (!isSignIn) {
      const nameValidationRes = validateName(name.current.value);
      setNameErrorMsg(nameValidationRes);
      if (nameValidationRes) return;
    }

    const emailValidationRes = validateEmail(email.current.value);
    setEmailErrorMsg(emailValidationRes);
    if (emailValidationRes) return;

    const passValidationRes = validatePassword(password.current.value);
    setPasswordErrorMsg(passValidationRes);
    if (passValidationRes) return;

    signInButton.innerHTML = "Sign In" ? `Signing In...` : `Signing Up...`;
    signInButton.disabled = true;

    if (!isSignIn) {
      //sign UP new the user
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { email, displayName, uid } = auth.currentUser;
              dispatch(
                addUser({ userId: uid, Email: email, Name: displayName })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setSignInErrorMsg(errorCode + "-" + errorMessage);
              signInButton.innerHTML = isSignIn ? "Sign In" : "Signi Up";
              signInButton.disabled = false;
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInErrorMsg(errorCode + "-" + errorMessage);
          signInButton.innerHTML = isSignIn ? "Sign In" : "Signi Up";
          signInButton.disabled = false;
        });
    } else {
      //Sign in existing user

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInErrorMsg(errorCode + "-" + errorMessage);
          signInButton.innerHTML = isSignIn ? "Sign In" : "Signi Up";
          signInButton.disabled = false;
        });
    }
  };

  const toggleignUp = () => {
    setIsSignIn(!isSignIn);
    setEmailErrorMsg(null);
    setNameErrorMsg(null);
    setPasswordErrorMsg(null);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="h-screen w-screen object-cover"
          src={LOGIN_BG_IMAGE}
          alt="loginbg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute md:p-8 bg-black text-white rounded-lg bg-opacity-80 md:w-1/4 w-[80%] m-60 p-4 mx-auto right-0 left-0 "
      >
        <h1 className="md:text-4xl md:pb-4 font-semibold text-lg ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter Full Name"
            className="md:p-2 md:mt-4 p-1 mt-2 w-full bg-gray-800 rounded-md"
          ></input>
        )}
        <p className="text-red-500 md:font-normal md:text-lg  text-sm">
          {nameErrorMsg}
        </p>

        <input
          ref={email}
          type="email"
          placeholder="Enter Email"
          className="md:p-2 md:mt-4 p-1 mt-2 w-full  bg-gray-800 rounded-md"
        ></input>
        <p className="text-red-500 md:text-lg text-sm md:font-normal  ">
          {emailErrorMsg}
        </p>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="md:p-2 md:mt-4 p-1 mt-2 w-full  bg-gray-800 rounded-md"
        ></input>
        <p className="text-red-500 md:font-normal md:text-lg  text-sm">
          {passwordErrorMsg}
        </p>
        <p className="text-red-500 mt-4 md:font-normal md:text-lg  text-sm">
          {" "}
          {signInErrorMsg}
        </p>
        <button
          id="signInButton"
          className=" md:p-2 md:mb-4 p-1 mb-2 w-full  text-white bg-red-700 hover:bg-red-900  rounded-lg "
          onClick={handleFormSubmit}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p
          className="cursor-pointer md:py-2 py-1 md:text-lg text-sm"
          onClick={toggleignUp}
        >
          {isSignIn
            ? "New to MoviesGPT? Sign up now."
            : "Already have an account? Sign in."}
        </p>
      </form>
    </div>
  );
};

export default Login;
