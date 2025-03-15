import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const MovieData = useSelector((store) => store.movies?.nowPlayingMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Pick a random movie when MovieData first loads or when retrying
  useEffect(() => {
    if (MovieData && MovieData.length > 0) {
      const randomIndex = Math.floor(Math.random() * MovieData.length);
      setSelectedMovie(MovieData[randomIndex]);
    }
  }, [MovieData]); // ✅ No extra function needed

  // Retry button handler
  const retryMovie = () => {
    if (MovieData && MovieData.length > 0) {
      const randomIndex = Math.floor(Math.random() * MovieData.length);
      setSelectedMovie(MovieData[randomIndex]);
    }
  };

  if (!selectedMovie) {
    return <div className="text-center text-white">Loading movies...</div>;
  }

  return (
    <div>
      <VideoTitle
        title={selectedMovie.original_title}
        overview={selectedMovie.overview}
      />
      <VideoBackground movieId={selectedMovie.id} retryMovie={retryMovie} />
    </div>
  );
};

export default MainContainer;
