import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, supportedLanguages, userAvatar } from "../utils/constants";
import { FaSignOutAlt, FaSearch, FaHome } from "react-icons/fa";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <select
              className="flex items-center space-x-2 text-white py-2 px-4 mx-4 my-2 bg-gray-600 rounded-lg hover:opacity-80 cursor-auto"
              onChange={handleLanguageChange}
            >
              {supportedLanguages.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <img
            className="h-12 w-12 rounded-lg"
            src={userAvatar}
            alt="User Icon"
          />
          <button
            className="flex items-center space-x-2 text-white py-2 px-4 mx-4 my-2 bg-blue-700 rounded-lg hover:opacity-80 cursor-auto"
            onClick={handleSearchClick}
          >
            {showGptSearch ? (
              <div className="flex items-center space-x-1">
                <FaHome />
                <span>Home</span>
              </div>
            ) : (
              <div className="flex items-center space-x-1">
                <FaSearch />
                <span>Search</span>
              </div>
            )}
          </button>
          <button
            onClick={handleSignOut}
            className="flex items-center space-x-2 text-white py-2 px-4 mx-4 my-2 bg-blue-700 rounded-lg hover:opacity-80 cursor-auto"
          >
            <span>Sign Out</span>
            <FaSignOutAlt />
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
