import { useState } from "react";
import Button from "./Button";

const AddNote = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    if (title && content) {
      const newNote = { title, content };
      onAddNote(newNote);
      setTitle("");
      setContent("");
      setIsEditing(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg ">
      {!isEditing ? (
        <Button
          label="Add Note"
          onClick={() => setIsEditing(true)}
          className="w-full py-2 px-4 bg-[#ffdd8b] border-black hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
      ) : (
        <div className="flex flex-col gap-4">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-black p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 border-black p-3 rounded-md w-full h-48 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500 text-black"
          />
          <div className="flex gap-4 justify-end">
            <Button
              label="Save"
              onClick={handleSave}
              className="bg-[#ffdd8b] text-black rounded-md px-6 py-2 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <Button
              label="Cancel"
              onClick={() => setIsEditing(false)}
              className="bg-gray-300 text-black rounded-md px-6 py-2 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
