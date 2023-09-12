import React, {useState} from "react";
import SignIn from "../assets/Menu.png";
import Logo from "../assets/Logo.png";
import "../App.css";
import axios from "../services/BaseApi";

function Header() {

  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]);

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
      <div>
        <img src={Logo} alt="" />
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
        <button>
          <img src={SignIn} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Header;