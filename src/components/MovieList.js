import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(title, movies);
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <div>
          <MovieCard />
        </div>
      </div>
    </div>
  );
};
export default MovieList;
