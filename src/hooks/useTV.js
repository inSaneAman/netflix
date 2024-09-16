import { useEffect } from "react";
import { APIOptions } from "../utils/constants";
import { addTV } from "../utils/movieSlice";
import { useDispatch, useSelector } from "react-redux";

const useTV = () => {
  const dispatch = useDispatch();

  const TV = useSelector((store) => store.movies.TV);

  const getTV = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/tv?page=1",
      APIOptions
    );

    const json = await data.json();
    dispatch(addTV(json.results));
  };

  useEffect(() => {
    !TV && getTV();
  }, []);
};

export default useTV;
