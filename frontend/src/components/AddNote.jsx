import { useState } from "react";
import axios from "axios";
import Button from "./Button";

const AddNote = ({ onAddNote }) => {
  const [note, setNote] = useState({ title: "", content: "" });
  const [isEditing, setIsEditing] = useState(false); // Track editing state

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:8000/api/notes/", note).then((res) => {
      onAddNote(res.data);
      setNote({ title: "", content: "" });
      setIsEditing(false); // Exit editing mode
    });
  };

  const handleCancel = () => {
    setNote({ title: "", content: "" }); // Clear the fields
    setIsEditing(false); // Exit editing mode
  };

  return (
    <div className="flex flex-col gap-4 bg-white shadow-md p-6 rounded-md">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Add Note</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Title"
          required
          readOnly={!isEditing} // Read-only if not editing
          className={`border rounded p-2 text-lg ${
            isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
          }`}
        />
        <textarea
          name="content"
          value={note.content}
          onChange={handleChange}
          placeholder="Content"
          required
          readOnly={!isEditing} // Read-only if not editing
          className={`border rounded p-2 text-lg h-32 ${
            isEditing ? "bg-white" : "bg-gray-200 cursor-not-allowed"
          }`}
        ></textarea>
        <div className="flex gap-4">
          {isEditing ? (
            <>
              <Button
                label="Save"
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              />
              <Button
                label="Cancel"
                type="button"
                onClick={handleCancel}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              />
            </>
          ) : (
            <Button
              label="Add Note"
              type="button"
              onClick={() => setIsEditing(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default AddNote;
