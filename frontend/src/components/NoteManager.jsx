import Button from "./Button";

const NoteManager = ({ notes, onDelete, onViewNote }) => {
  return (
    <div className="w-full ">
      {/* List of Notes */}
      <div>
        {notes.map((note) => (
          <div
            key={note.id}
            className="first:rounded-t-lg last:rounded-b-lg flex items-center justify-between border-b py-6 px-4 cursor-pointer hover:bg-[#E4AF0A]/70 transition-colors duration-200 ease-in-out"
            onClick={() => onViewNote(note)}
          >
            <div>
              <h3 className="text-black text-lg font-semibold">{note.title}</h3>
              <p className="text-black text-sm">{note.content.slice(0, 100)}...</p>
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
