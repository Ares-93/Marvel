import "../styles/Search.scss";
import { useState } from "react";

const Search = () => {
  const [characterName, setCharacterName] = useState("");
  const [characterData, setCharacterData] = useState(null);
  const [comicData, setComicData] = useState(null);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  const handleSubmit = () => {
    event.preventDefault();

    getCharacterData();
  };

  const getCharacterData = () => {
    //resets data if an API call doesnt go through
    setCharacterData(null);
    setComicData(null);

    const timeStamp = new Date().getTime();
    const hash = generateHash(timeStamp);
  };

  const generateHash = (timeStamp) => {
    return md5(timeStamp + publicKey + privateKey);
  };

  const handleChange = (event) => {
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
