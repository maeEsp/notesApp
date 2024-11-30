import { useState, useEffect } from "react";
import axios from "axios";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/notes/").then((res) => {
      setNotes(res.data);
    });
  }, []);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`).then(() => {
      setNotes(notes.filter((note) => note.id !== id));
    });
  };

  return (
    <div>
      <h1>Notes App</h1>
      <AddNote onAddNote={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};

export default App;
