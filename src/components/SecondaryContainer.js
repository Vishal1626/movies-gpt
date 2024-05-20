import { useSelector } from "react-redux";
import MoviesList from "./MoviesList";

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);
  const upcomingMOvies = useSelector((store) => store.movies?.upcomingMOvies);
  if (nowPlayingMovies == null) return;
  if (popularMovies == null) return;
  if (topRatedMovies == null) return;
  if (upcomingMOvies == null) return;

  return (
    <div className=" bg-black">
      <div className="-mt-48 relative z-10 ml-10">
        <MoviesList title={"Now Playing Movies"} movies={nowPlayingMovies} />
        <MoviesList title={"Top Rated Movies"} movies={topRatedMovies} />
        <MoviesList title={"Popular Movies"} movies={popularMovies} />
        <MoviesList title={"Upcoming Movies"} movies={upcomingMOvies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
