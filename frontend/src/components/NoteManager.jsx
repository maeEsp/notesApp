import SearchBar from "./SearchBar";
import Button from "./Button";

const NoteManager = ({ notes, onDelete, onViewNote, onSearch }) => {
  return (
    <div className="w-full">
      {/* Title "Notes" */}
      <h2 className="text-3xl font-bold text-center text-black mb-4">Notes</h2>

      {/* Search Bar */}
      <SearchBar onSearch={onSearch} />

      {/* List of Notes */}
      <div className="mt-4 space-y-4">
        {notes.map((note) => (
          <div
            key={note.id}
            className="flex items-center justify-between border-b py-3 px-2 cursor-pointer hover:bg-yellow-100 transition-colors duration-200 ease-in-out"
            onClick={() => onViewNote(note)}
          >
            <div>
              <h3 className="text-black text-lg font-semibold">{note.title}</h3>
              <p className="text-black text-sm">{note.content.slice(0, 30)}...</p>
            </div>
            <div className="flex gap-2">
            <Button
              label="X"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(note.id);
              }}
              className="text-red-400 hover:text-red-700  rounded-full w-8 h-8 flex place-items-end top-0 right-0 justify-center text-xl"
            />


            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NoteManager;
