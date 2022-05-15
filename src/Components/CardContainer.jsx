import { useEffect, useState } from "react";
import axios from "axios";
import search from "../img/search.svg";
import { Card } from "./Card";
const CardContainer = ({
  inputText,
  setInputText,
  searchNum,
  setSearchNum,
}) => {
  // function to input text
  const getInput = (e) => {
    setInputText(e.target.value);
  };

  // function to get the number of results
  const getNumber = (e) => {
    setSearchNum(e.target.value);
  };
  // state to save the results given by api
  const [result, setResult] = useState([]);
  // this will run everytime the state of the input changes
  useEffect(() => {
    if (inputText) {
      axios
        .get(
          `https://asia-south1-socialboat-dev.cloudfunctions.net/assignmentVideos?q=${inputText}&numResults=${searchNum}`
        )
        .then((result) => {
          setResult(result.data.results);
          console.log(result.data.results);
        });
    } else {
      setResult([]);
    }
  }, [inputText]);

  return (
    <div className="row cardContainer">
      <div className="cardContainer_searchBar">
        <input
          type="text"
          placeholder="Search"
          className="cardContainer_searchBar-input"
          onChange={getInput}
        />
        <img
          src={search}
          alt="search-icon"
          className="cardContainer_searchBar-img"
        />
        <input
          type="text"
          className="cardContainer_pageNum-input input-2"
          placeholder="Limit Results (Default:5) "
          onBlur={getNumber}
        />
      </div>

      <div className="cardContainer_heading">
        {inputText ? (
          <h2> Search Results </h2>
        ) : (
          <h2>
            Start searching the videos by entering keywords in the searchbar
          </h2>
        )}
      </div>
      <div className="cardContainer_content">
        {result.map((data) => (
          <Card url={data.video} heading={data.heading} tags={data.tags} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
