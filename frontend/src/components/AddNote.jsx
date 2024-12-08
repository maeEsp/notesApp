import { useState } from "react";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (title && content) {
      const newNote = { title, content }; // Create new note object
      onAddNote(newNote); // Send to parent component
      setTitle("");
      setContent("");
      setIsEditing(false);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => setIsEditing(true)}
        >
          Add Note
        </button>
      ) : (
        <div className="flex flex-col gap-2">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border p-2 rounded h-32"
          />
          <div className="flex gap-2">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
