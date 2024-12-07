import Button from "./Button";

const NoteList = ({ notes, onDelete, onUpdate }) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <Button label="Delete" onClick={() => onDelete(note.id)} />
          <Button label="Edit" onClick={() => onUpdate(note)} />
        </div>
      ))}
    </div>
  );
};

export default NoteList;
