import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUserData } from "../utils/userSlice";
import { useEffect } from "react";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  console.log(user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
  }, []);
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-52 ml-40"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="headerlogo"
      />

      {user && (
        <div className="mt-4">
          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 "
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <span className="flex text-sm">{user.Name}</span>
        </div>
      )}
    </div>
  );
};

export default Header;
