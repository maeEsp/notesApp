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
      className="relative flex flex-col gap-4 p-6"
      style={{
        
      }}
    >
      {/* Title Field */}
      <input
        name="title"
        value={updatedNote.title}
        onChange={handleChange}
        placeholder="Title"
        className="border border-black/25 p-3 rounded-md w-full focus:outline-none focus:border-[#E4AF0A] text-black"
        />

      {/* Content Field */}
      <textarea
        name="content"
        value={updatedNote.content}
        onChange={handleChange}
        placeholder="Write your notes here..."
        className="border border-black/25 p-3 rounded-md w-full h-64 resize-none focus:outline-none focus:border-[#E4AF0A] text-black"
      />

      {/* Action Buttons */}
      <div className="flex gap-2 justify-end">
      <Button
          label="Save"
          type="submit"
          className="bg-[#E4AF0A] text-white font-normal rounded-md px-6 py-2 hover:bg-[#E4AF0A]/70 focus:outline-none focus:ring-2 focus:ring-yellow-300"
          />
        <Button
          label="Cancel"
          onClick={onCancel}
          className="bg-red-600 text-white font-normal rounded-md px-6 py-2 hover:bg-red-600/70 focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
      </div>
    </form>
  );
};

export default EditNote;
