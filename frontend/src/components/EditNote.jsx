import { useState } from "react";
import axios from "axios";

const EditNote = ({ note, onSave, onCancel }) => {
  const [updatedNote, setUpdatedNote] = useState({ ...note });

  const handleChange = (e) => {
    setUpdatedNote({ ...updatedNote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(updatedNote);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 bg-white shadow-md p-4 rounded-md"
    >
      <input
        name="title"
        value={updatedNote.title}
        onChange={handleChange}
        placeholder="Title"
        className="border p-2 rounded-md"
      />
      <textarea
        name="content"
        value={updatedNote.content}
        onChange={handleChange}
        placeholder="Content"
        className="border p-2 rounded-md h-32"
      />
      <div className="flex gap-2 mt-2">
        <button className="bg-blue-500 text-white px-4 py-1 rounded" type="submit">
          Save
        </button>
        <button className="bg-gray-500 text-white px-4 py-1 rounded" type="button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditNote;
