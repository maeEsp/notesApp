const NoteList = ({ notes, onDelete, onUpdate }) => {
    return (
      <div>
        {notes.map((note) => (
          <div key={note.id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
            <button onClick={() => onDelete(note.id)}>Delete</button>
            <button onClick={() => onUpdate(note)}>Edit</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default NoteList;
  