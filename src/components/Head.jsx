import React, { useEffect, useState } from "react";
import hamburger from "../images/hamburger-menu.png";
import youtubeLogo from "../images/youtube-logo.png";
import userIcon from "../images/user-icon.png";
//import searchIcon from "../images/search-png.png";
import { toggleMenu } from "../utils/sidePanelSlice";
import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import { cacheResults } from "../utils/searchSlice";
import {
  SEARCH_SUGGESTION_API,
  YOUTUBE_SEARCH_RESULTS,
} from "../utils/constants";
import { BrowserRouter, Link } from "react-router-dom";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestion, setSearchSuggestion] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    //here we are making api call only if the diff b/w key press is >200ms
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        //setSearchResults(searchCache[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);
    //clearing timer after every re-render
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchResults = async () => {
    // need to make a api call here async function
    const response = await fetch(SEARCH_SUGGESTION_API + searchQuery);
    const respJson = await response.json();
    setSearchResults(respJson[1]);
    console.log(respJson);
    dispatch(
      cacheResults({
        [searchQuery]: respJson[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const onSearchItemClick = async (val) => {
    try {
      const response = await fetch(YOUTUBE_SEARCH_RESULTS + val);
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 align-middle">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 pr-5 mt-1 cursor-pointer"
          src={hamburger}
          alt="hamburger-menu"
        />
        <a href="/">
          <img className="w-24 h-8" src={youtubeLogo} alt="youtube-icon" />
        </a>
      </div>

      <div className="col-span-10 mx-20">
        <div>
          <input
            className="w-1/2 h-8 px-3 py-1 border border-gray-400 rounded-l-full focus:border-orange-200"
            type="text"
            value={searchQuery}
            onFocus={() => setSearchSuggestion(true)}
            onBlur={() => setSearchSuggestion(false)}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
          />
          <button className="px-3 py-1 border border-gray-400 rounded-r-full">
            {" "}
            Search
            {/* <img className='h-4' src={searchIcon} alt="search-icon" /> */}
          </button>
        </div>
        {searchSuggestion ? (
          <div className="fixed bg-white py-2 px-2 w-[23.5rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {searchResults.map((item, index) => (
                <li
                  className="py-2 px-3 shadow-sm hover:bg-gray-100 z-10"
                  value={item}
                  onMouseDown={(e) => {
                    onSearchItemClick(e.target.getAttribute("value"));
                    setSearchQuery(e.target.getAttribute("value"));
                    setSearchSuggestion(false);
                  }}
                >
                  <Link to={"/searchResults"} key={index}>
                    {" "}
                    🔍 {item}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
      <div className="col-span-1"></div>
      <img className="h-5" src={userIcon} alt="user-icon" />
    </div>
  );
};

export default Head;
