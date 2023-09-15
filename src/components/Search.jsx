import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import "../App.css";

function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
 
  const handleKeyPress = (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
      navigate("/searchresult");
      handleSearch(searchQuery);
    }
  };

  return (
    <>
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
    </>
  );
}

export default Search;