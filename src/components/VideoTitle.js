import { FaPlay, FaInfoCircle } from "react-icons/fa";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-7xl font-sofadi">{title}</h1>
      <p className="py-6 text-[95%] font-sofadi w-1/4">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-white text-black flex items-center justify-center w-40 p-4 px-6 text-lg font-kalnia rounded-lg hover:bg-opacity-80">
          <FaPlay className="items-start mr-2" /> Play
        </button>
        <button className="bg-gray-700 text-white flex items-center justify-center w-40 p-4 px-6 text-lg font-kalnia rounded-lg bg-opacity-40">
          <FaInfoCircle className="items-start mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
