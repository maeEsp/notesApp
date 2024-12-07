import SearchBar from "./SearchBar";
import Button from "./Button";

const NoteManager = ({ notes, onDelete, onViewNote, onSearch }) => {
  return (
    <div className="w-full">
      {/* Search Bar */}
      <SearchBar onSearch={onSearch} />

      {/* List of Notes */}
      <div className="mt-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex items-center justify-between border-b py-3 px-2 cursor-pointer hover:bg-blue-100 transition-colors duration-200 ease-in-out"
            onClick={() => onViewNote(note)} // Handle the click event
          >
            <div>
              <h3 className="text-lg font-semibold">{note.title}</h3>
              <p className="text-sm text-gray-600">{note.content.slice(0, 30)}...</p>
            </div>
            <div className="flex gap-2">
              <Button
                label="X"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent the click from triggering view logic
                  onDelete(note.id);
                }}
                className="bg-red-500 text-white rounded hover:bg-red-600 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteManager;
