import { FaSearch } from "react-icons/fa";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 bg-red-700 text-white text-semibold rounded-lg col-span-3 flex items-center justify-center space-x-2 hover:opacity-80">
          <FaSearch />
          <span>{lang[langKey].search}</span>
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
