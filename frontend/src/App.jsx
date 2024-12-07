import { useState, useEffect } from "react";
import axios from "axios";
import AddNote from "./components/AddNote";
import NoteManager from "./components/NoteManager";
import EditNote from "./components/EditNote";

const App = () => {
  const [notes, setNotes] = useState([]); // List of notes
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null); // Note currently selected for viewing
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/notes/").then((res) => {
      setNotes(res.data);
      setFilteredNotes(res.data);
    });
  }, []);

  const deleteNote = (id) => {
    axios.delete(`http://127.0.0.1:8000/api/notes/${id}/`).then(() => {
      const updatedNotes = notes.filter((note) => note.id !== id);
      setNotes(updatedNotes);
      setFilteredNotes(updatedNotes);
    });
  };

  const handleSearch = (query) => {
    if (query.trim() === "") {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(
        notes.filter((note) =>
          note.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  const handleViewNote = (note) => {
    setSelectedNote(note);
    setIsEditing(false);
  };

  const handleBack = () => {
    setSelectedNote(null); // Return to default "AddNote"
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4">
      {/* Left Side: NoteManager */}
      <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow">
        <NoteManager
          notes={filteredNotes}
          onDelete={deleteNote}
          onViewNote={handleViewNote}
          onSearch={handleSearch}
        />
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/3 bg-white p-4 rounded shadow">
        {selectedNote ? (
          isEditing ? (
            // Edit mode
            <EditNote
              note={selectedNote}
              onSave={(updatedNote) => {
                axios
                  .put(`http://127.0.0.1:8000/api/notes/${updatedNote.id}/`, updatedNote)
                  .then(() => {
                    const updatedNotes = notes.map((note) =>
                      note.id === updatedNote.id ? updatedNote : note
                    );
                    setNotes(updatedNotes);
                    setFilteredNotes(updatedNotes);
                    setSelectedNote(updatedNote); // Update the currently selected note with the latest changes
                    setIsEditing(false);
                  });
              }}
              onCancel={() => setIsEditing(false)}
            />
          ) : (
            // View mode with Back/Edit Buttons
            <div className="flex flex-col gap-4">
              <div className="flex justify-between items-center mb-4">
                <button
                  className="bg-gray-500 text-white px-3 py-2 rounded hover:bg-gray-600"
                  onClick={handleBack}
                >
                  Back
                </button>
                <button
                  className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
              </div>
              <h2 className="text-lg font-semibold mb-2 word-wrap">{selectedNote.title}</h2>
              <p className="text-sm text-gray-700 mb-2 word-wrap">{selectedNote.content}</p>
            </div>
          )
        ) : (
          // Default view with AddNote
          <AddNote onAddNote={(note) => setNotes([...notes, note])} />
        )}
      </div>
    </div>
  );
};

export default App;
