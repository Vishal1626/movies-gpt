import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";
import NotificationPopup from "./NotificationPopup";

const VideoBackground = ({ movieId, retryMovie }) => {
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;

  useMovieTrailer(movieId);
  const trailerVideo = useSelector((store) => store.movies?.movieTrailer);

  // 🔹 Only retry when trailerVideo is undefined
  useEffect(() => {
    if (trailerVideo === undefined && retryCount < MAX_RETRIES) {
      setRetryCount((prev) => prev + 1);
      retryMovie(); // Ask parent to pick a new movie
    }
  }, [trailerVideo, retryCount, retryMovie]);

  // 🔹 Wait for API response if trailerVideo is null
  if (trailerVideo === null) {
    return <div className="text-center text-white">Loading trailer...</div>;
  }

  // 🔹 If retries failed, show a message instead of crashing
  if (trailerVideo === undefined && retryCount >= MAX_RETRIES) {
    return (
      <NotificationPopup NotificationText="Trailer not available for the auto-selected movie. Try refreshing." />
    );
  }

  return (
    <div>
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube-nocookie.com/embed/${trailerVideo?.key}?&rel=0&controls=0&modestbranding=1&showinfo=0&autoplay=1&mute=1&loop=1`}
        title="netflix background player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
