import Button from "./Button";

const NoteList = ({ notes, onDelete, onUpdate }) => {
  return (
    <div className="space-y-4">
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-yellow-200 border-2 border-black rounded-md shadow-sm"
        >
          <h3 className="text-black font-semibold">{note.title}</h3>
          <p className="text-black">{note.content.slice(0, 30)}...</p>
          <div className="flex gap-2 mt-2">
            <Button
              label="Delete"
              onClick={() => onDelete(note.id)}
              className="bg-red-500 text-white hover:bg-red-600 border-2 border-black"
            />
            <Button
              label="Edit"
              onClick={() => onUpdate(note)}
              className="bg-blue-500 text-white hover:bg-blue-600 border-2 border-black"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
