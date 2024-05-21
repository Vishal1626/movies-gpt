import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);
  if (trailerVideo === null) return;
  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo.key +
          "?&rel=0&controls=0&modestbranding=1&&showinfo=0&autoplay=1&mute=1&loop=1"
        }
        title="netflix background player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
