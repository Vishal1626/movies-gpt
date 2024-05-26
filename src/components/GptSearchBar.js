import { Search } from "lucide-react";
import { useRef } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS, OPENAI_KEY } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";
import { toggleGptSearchStarted } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const gptSearchText = useRef(null);
  const userName = useSelector((store) => store.user);
  console.log(userName.Name);

  const genAI = new GoogleGenerativeAI(OPENAI_KEY);

  const getMovies = async (movie) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" + movie,
      API_OPTIONS
    );

    const json = await movieData.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    dispatch(toggleGptSearchStarted());

    const searchQuery =
      "Act as movie recommendation system and suggest movies for the query: " +
      gptSearchText.current.value +
      ". only give me names of 5 movies, comma separated like the given result ahead. Example Result: Avatar, Sholay, Bahubali, Singham, Once upon a time in mumbai";

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(searchQuery);
    const response = await result.response;
    const movies = response.text().split(",");

    //getMovies("Hera Pheri");

    const promiseResults = movies.map((movie) => getMovies(movie));

    const tmdbApiResults = await Promise.all(promiseResults);
    dispatch(
      addGptMovies({
        gptMovieSuggetion: movies,
        tmdbMoviesResult: tmdbApiResults,
      })
    );

    dispatch(toggleGptSearchStarted());
  };

  return (
    <>
      <div className=" pt-[55%] md:pt-[10%]  flex justify-center">
        <form
          className="w-full md:w-1/2 grid grid-cols-12"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={gptSearchText}
            type="text"
            placeholder={userName.Name + " What would you like to watch today?"}
            className="px-2 py-2 ml-1  md:px-4 md:py-3 border rounded-l-full focus:outline-none focus:ring focus:border-blue-300 col-span-9 md:col-span-10"
          />
          <button
            onClick={handleGptSearchClick}
            className="flex px-3 py-3 mr-3 items-center bg-blue-500 text-white rounded-r-full text-sm md:text-2xl hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300  col-span-3 md:col-span-2"
          >
            <Search
              color="white"
              className="mr-1 md:mr-2"
              strokeWidth={3}
              size={20}
            />
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default GptSearchBar;
