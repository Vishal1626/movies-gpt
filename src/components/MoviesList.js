import { ChevronRight } from "lucide-react";
import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="md:px-6 text-white">
      <h1 className=" text-lg md:text-3xl flex md:py-3">
        {title}{" "}
        <ChevronRight
          className="md:mt-2"
          color="white"
          strokeWidth={3}
          size={30}
        />
      </h1>
      <div className="flex overflow-x-scroll no-scrollbar">
        <div className="flex ">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
