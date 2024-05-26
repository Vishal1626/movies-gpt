import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUserData } from "../utils/userSlice";
import { useEffect } from "react";
import Logo from "../img/moviesGptLogo-removebg-preview.png";
import { toggleGptSearchBtn } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchBtn());
  };

  const user = useSelector((store) => store.user);
  const gptSearchBtn = useSelector((store) => store.gptSearch?.gptSearchToggle);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid } = user;
        dispatch(addUser({ userId: uid, Email: email, Name: displayName }));
        navigate("/browse");
        // ...
      } else {
        dispatch(removeUserData());
        navigate("/");
      }
    });
    return () => unsubsribe();
  }, []);
  return (
    <div className="absolute w-screen px-6 py-2 md:px-8 md:py-2 bg-gradient-to-b from-black z-10 flex flex-row md:flex-row justify-between no-scrollbar">
      <img
        className=" w-44 h-40 -m-6 md:h-52 md:w-60 md:pr-4"
        src={Logo}
        alt="headerlogo"
      />

      {user && (
        <div className="  pl-10 md:mt-4 mx-8 md:mx-0">
          <button
            className={`text-white  md:font-medium rounded-lg text-sm px-4 py-2 m-1 md:px-5 md:py-2.5 md:m-2 bg-purple-700 hover:bg-purple-800`}
            onClick={handleGptSearchClick}
          >
            {!gptSearchBtn ? "GPT Search" : "Movies"}
          </button>
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm  px-4 py-2 m-1 md:px-5 md:py-2.5 md:mb-2 "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
