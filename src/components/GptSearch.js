import GptSearchBar from "./GptSearchBar";
import LOGIN_BG_IMAGE from "../img/signinbgimage.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img className="h-screen w-screen" src={LOGIN_BG_IMAGE} alt="loginbg" />
      </div>
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;
