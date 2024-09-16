import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-4 transition-transform transform hover:scale-110 hover:z-40 cursor-pointer">
      <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  );
};

export default MovieCard;
