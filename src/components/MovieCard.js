import { useState } from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { title, overview, poster_path } = movie;

  if (!poster_path) return;

  const truncateString = () => {
    if (overview.length <= 180) {
      return overview;
    } else {
      return overview.substring(0, 180) + "...";
    }
  };

  const movieDescription = truncateString();

  return (
    <>
      <div
        className="w-48 mr-2 relative overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          alt="Movie Poster"
          src={IMG_CDN + poster_path}
          className={` ${isHovered ? "" : ""}`}
        />
        <div
          className={`absolute top-0 left-0 w-full h-full p-6 transition-all duration-300 ${
            isHovered ? "bg-gray-950 opacity-80" : "opacity-0"
          }`}
        >
          <div className="text-white text-base font-bold mb-2">{title}</div>
          <p className="text-white text-sm whitespace-normal truncate">
            {movieDescription}
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCard;
