import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";
import ShimmerUI from "./ShimmerUI";
const GptMovieSuggetions = () => {
  const searchBtnClicked = useSelector(
    (store) => store.gptSearch?.searchStarted
  );
  const { gptMovies, tmdbMovieResult } = useSelector(
    (store) => store.gptSearch
  );

  if (gptMovies == null) {
    if (searchBtnClicked) return <ShimmerUI />;
  }

  // if (gptMovies == null) return;
  else
    return searchBtnClicked ? (
      <ShimmerUI />
    ) : (
      <div className="p-8 m-16 rounded-lg bg-black bg-opacity-90">
        {gptMovies.map((movieName, index) => (
          <MoviesList
            key={movieName}
            title={movieName}
            movies={tmdbMovieResult[index]}
          />
        ))}
      </div>
    );
};

export default GptMovieSuggetions;
