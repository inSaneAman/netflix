import { useEffect } from "react";
import { APIOptions } from "../utils/constants";
import { addTrendingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();
  const getTrendingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      APIOptions
    );

    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
