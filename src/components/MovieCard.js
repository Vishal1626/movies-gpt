import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return (
    <div className="w-48 mr-2 relative overflow-hidden">
      <img
        alt="moviephoto"
        src={IMG_CDN + movie.poster_path}
        className="transform scale-100 transition-transform duration-300 hover:scale-110 hover:z-10 hover:shadow-lg"
      />
    </div>
  );
};

export default MovieCard;
