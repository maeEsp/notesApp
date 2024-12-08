import { useState } from "react";
import Button from "./Button";

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
      className="relative flex flex-col gap-4 p-6  "
      style={{
        
      }}
    >
      {/* Title Field */}
      <input
        name="title"
        value={updatedNote.title}
        onChange={handleChange}
        placeholder="Title"
        className="border-none bg-transparent text-black w-full focus:outline-none font-handwriting"
        style={{
          fontFamily: "'Patrick Hand', sans-serif",
          fontSize: "1.25rem",
          lineHeight: "40px", // Aligns with notebook lines
          borderBottom: "2px solid black", // Single underline for the title
        }}
      />

      {/* Content Field */}
      <textarea
        name="content"
        value={updatedNote.content}
        onChange={handleChange}
        placeholder="Write your notes here..."
        className="h-48 resize-none text-black p-2 rounded-md bg-transparent font-handwriting focus:outline-none "
        style={{
          fontFamily: "'Patrick Hand', sans-serif",
          fontSize: "1rem",
          lineHeight: "40px", // Matches notebook lines
        }}
      />

      {/* Action Buttons */}
      <div className="flex gap-4 justify-end mt-4">
        <Button
          label="Save"
          type="submit"
          className="py-2 px-4 bg-[#ffdd8b] text-black  hover:bg-yellow-200"
        />
        <Button
          label="Cancel"
          onClick={onCancel}
          className="py-2 px-4 bg-gray-500 text-white border-2  hover:bg-gray-600"
        />
      </div>

      {/* Optional: Top and Bottom Notebook Effects */}
     
    </form>
  );
};

export default EditNote;
