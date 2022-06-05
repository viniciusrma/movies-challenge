const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
        type="search"
        placeholder="Type to search"
        value={props.value}
        onChange={(event) => props.setSearchValue(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
