import { Info, Play } from "lucide-react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen h-screen aspect-video pt-96 pl-44 absolute bg-gradient-to-r from-black text-white">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="w-1/3 mt-2">{overview}</p>
      <div className="flex space-x-2 mt-4">
        <button className="flex  bg-white p-3 px-6 rounded-md text-xl text-black  hover:opacity-80">
          <Play className="mr-1" color="black" strokeWidth={3} size={30} />
          Play
        </button>
        <button className="flex bg-gray-700  p-3 px-6 rounded-md text-xl text-white  hover:opacity-80">
          <Info className="mr-2" color="white" strokeWidth={3} size={30} />
          Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
