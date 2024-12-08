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
    <div className="p-4">
      {!isEditing ? (
        <Button
          label="Add Note"
          onClick={() => setIsEditing(true)}
          className="py-2 px-4 bg-[#E4AF0A] hover:bg-[#E4AF0A]/70 text-white font-normal"
        />
      ) : (
        <div className="flex flex-col gap-4">
          <input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-black/25 p-3 rounded-md w-full focus:outline-none focus:border-[#E4AF0A] text-black"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border border-black/25 p-3 rounded-md w-full h-64 resize-none focus:outline-none focus:border-[#E4AF0A] text-black"
          />
          <div className="flex gap-2 justify-end">
            <Button
              label="Save"
              onClick={handleSave}
              className="bg-[#E4AF0A] text-white font-normal rounded-md px-6 py-2 hover:bg-[#E4AF0A]/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <Button
              label="Cancel"
              onClick={() => setIsEditing(false)}
              className="bg-red-600 text-white font-normal rounded-md px-6 py-2 hover:bg-red-600/70 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
