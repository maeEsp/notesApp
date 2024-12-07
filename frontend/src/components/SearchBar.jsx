const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search by title..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full border rounded p-2 text-sm"
      />
    );
  };
  
  export default SearchBar;
  