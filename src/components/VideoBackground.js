import { useEffect } from "react";
import { APIOptions } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/365177/videos?language=en-US",
      APIOptions
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
  return <div>{VideoBackground}</div>;
};

export default VideoBackground;
