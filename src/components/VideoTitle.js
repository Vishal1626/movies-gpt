import { Info, Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  const truncateString = () => {
    if (overview.length <= 300) {
      return overview;
    } else {
      return overview.substring(0, 180) + "...";
    }
  };

  const movieDescription = truncateString();
  return (
    <div className=" w-screen h-screen aspect-video md:pt-96 md:pl-44 pt-80 pl-8 absolute bg-gradient-to-r from-black text-white">
      <h1 className=" text-sm md:text-3xl font-bold">{title}</h1>
      <p className="md:w-1/3 md:mt-2 text-sm md:text-lg ">{movieDescription}</p>
      <div className="flex space-x-2 mt-4">
        <button className="flex p-1 px-2 text-lg   bg-white md:p-3 md:px-6 rounded-md md:text-xl text-black  hover:opacity-80">
          <Play className="mr-1" color="black" strokeWidth={3} size={30} />
          Play
        </button>
        <button className="flex bg-gray-700 p-1 px-2 text-lg md:p-3 md:px-6 rounded-md md:text-xl text-white  hover:opacity-80">
          <Info
            className=" mr-1 md:mr-2"
            color="white"
            strokeWidth={3}
            size={30}
          />
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
