import GptSearchBar from "./GptSearchBar";
import LOGIN_BG_IMAGE from "../img/signinbgimage.jpg";
import GptMovieSuggetions from "./GptMovieSuggetions";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10 bg-black">
        <img
          className="h-screen object-cover md:h-auto"
          src={LOGIN_BG_IMAGE}
          alt="loginbg"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggetions />
    </div>
  );
};

export default GptSearch;
