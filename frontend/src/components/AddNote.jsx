import { useState } from "react";
import axios from "axios";

const AddNote = ({ onAddNote }) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/notes/", note).then((res) => {
      onAddNote(res.data);
      setNote({ title: "", content: "" });
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={note.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={note.content}
        onChange={handleChange}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
