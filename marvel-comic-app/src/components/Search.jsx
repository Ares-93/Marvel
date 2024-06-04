import "../styles/Search.scss";
import { useState } from "react";

const Search = () => {
  const [characterName, setCharacterName] = useState("");

  const handleSubmit = () => {
    //TODO implement later
  };

  const handleChange = (event) => {
    //TODO implement later
    setCharacterName(event.target.value);
  };

  const handleReset = () => {
    //TODO implement later
  };

  return (
    <>
      <form className="search" onSubmit={handleSubmit}>
        <input
          placeholder="ENTER CHARACTER NAME"
          type="text"
          onChange={handleChange}
        />
        <div className="button">
          <button type="submit">Get character data</button>
          <button type="reset" className="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
