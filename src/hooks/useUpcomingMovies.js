import { useEffect } from "react";
import { APIOptions } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      APIOptions
    );

    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useTrendingMovies;
