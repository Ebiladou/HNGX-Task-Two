import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import SignIn from "../assets/Menu.png";
import Logo from '../assets/newtv.png'
import "../App.css";
import axios from "../services/BaseApi";

function Header() {

  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      const response = await axios.get("/search/movie",
        {
          params: {
            query: searchQuery,
          },
        }
      );

      setSearchResults(response.data.results);
      navigate('/Searchresult');
    } catch (error) {
      console.error("Error searching for movies:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };


  return (
    <div className="header-flex">
      <div className="header-home">
        <img src={Logo} alt="" />
        <h1>MovieBox</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          className="search-bar"
          placeholder="What do you want to watch?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div>
        <button className="sign-btn">
          <img src={SignIn} alt="sign in logo" />
        </button>
      </div>
    </div>
  );
}

export default Header;