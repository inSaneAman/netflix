import { FaSearch } from "react-icons/fa";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { APIOptions } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispactch = useDispatch();
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const searchMovies = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      APIOptions
    );

    const json = await data.json();
    return json.results;
  };

  const handleGPTSearch = async () => {
    const query = searchText.current.value;
    console.log(query);

    const gptQuery = `Act as a Movie Recommendation System and suggest some movies for the query: "${query}". Only give me names of 5 best fitting movies, comma separated, like the example result given ahead. Example Result: Koi Mil Gaya, Sholay, Golmaal, Chennai Express, Dhamaal`;

    const gptResults = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: gptQuery }],
    });

    if (!gptResults.choices) {
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovies(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispactch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black bg-opacity-70 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white text-semibold rounded-lg col-span-3 flex items-center justify-center space-x-2 hover:opacity-80"
          onClick={handleGPTSearch}
        >
          <FaSearch />
          <span>{lang[langKey].search}</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
