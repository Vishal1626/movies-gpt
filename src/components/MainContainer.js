import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const MovieData = useSelector((store) => store.movies?.nowPlayingMovies);
  const [randomIndex, setRandomIndex] = useState(0);

  // 🔹 Ensure MovieData is available before setting index
  useEffect(() => {
    if (MovieData && MovieData.length > 0) {
      setRandomIndex(Math.floor(Math.random() * MovieData.length));
    }
  }, [MovieData]); // Runs when MovieData changes

  // 🔹 If MovieData is still null, return loading
  if (!MovieData || MovieData.length === 0) {
    return <div className="text-center text-white">Loading movies...</div>;
  }

  // 🔹 Function to pick a new random movie when retrying
  const retryMovie = () => {
    setRandomIndex(Math.floor(Math.random() * MovieData.length));
  };

  const { original_title, overview, id } = MovieData[randomIndex];

  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} retryMovie={retryMovie} />
    </div>
  );
};

export default MainContainer;
