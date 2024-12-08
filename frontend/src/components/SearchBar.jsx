const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search by title..."
      onChange={(e) => onSearch(e.target.value)}
      className="w-full border-1 border-black rounded p-3 text-black"
    />
  );
};

export default SearchBar;
