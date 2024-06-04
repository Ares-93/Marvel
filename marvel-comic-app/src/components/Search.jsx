import "../styles/Search.scss";

const Search = () => {
  const handleSubmit = () => {
    //TODO implement later
  };

  const handleChange = () => {
    //TODO implement later
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
