import { CiCircleInfo, CiPlay1 } from "react-icons/ci";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-32 px-12">
      <h1 className="text-7xl font-sofadi">{title}</h1>
      <p className="py-6 text-xl font-sofadi w-1/4">{overview}</p>
      <div className="flex space-x-4">
        <button className="bg-gray-500 text-black flex items-center justify-center w-40 p-4 px-6 text-lg font-kalnia rounded-lg bg-opacity-50">
          <CiPlay1 className="items-start mr-2" /> Play
        </button>
        <button className="bg-gray-500 text-black flex items-center justify-center w-40 p-4 px-6 text-lg font-kalnia rounded-lg bg-opacity-50">
          <CiCircleInfo className="items-start mr-2" />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
