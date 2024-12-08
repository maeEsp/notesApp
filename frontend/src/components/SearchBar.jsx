const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search"
      onChange={(e) => onSearch(e.target.value)}
      className="w-full rounded-lg p-2 bg-[#D2D2D7] text-black placeholder-black/50 hover:bg-[#e9e9ef] focus:placeholder-black focus:bg-white"
    />
  );
};

export default SearchBar;
