import { useState } from "react";
import Button from "./Button";

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
    <div className="">
      {!isEditing ? (
        <Button
          label="Add Note"
          onClick={() => setIsEditing(true)}
          className="bg-green-500 text-white hover:bg-green-600"
        />
      ) : (
        <div className="flex flex-col gap-2 h-full">
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
            className="border p-2 rounded h-[700px]"
          />
          <div className="flex gap-2">
            <Button
              label="Save"
              onClick={handleSave}
              className="bg-blue-500 text-white hover:bg-blue-600"
            />
            <Button
              label="Cancel"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 text-white hover:bg-gray-600"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
