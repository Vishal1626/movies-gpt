import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const MainContainer = () => {
  const MovieData = useSelector((store) => store.movies?.nowPlayingMovies);
  if (MovieData === null) return;

  const generateRandomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const movieNumber = generateRandomNum(0, MovieData.length);

  const { original_title, overview, id } = MovieData[movieNumber];
  return (
    <div className="">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
