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
        className="border p-2 rounded-md h-[700px]"
      />
      <div className="flex gap-2 mt-2">
        <Button
          label="Save"
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-600"
        />
        <Button
          label="Cancel"
          onClick={onCancel}
          className="bg-gray-500 text-white hover:bg-gray-600"
        />
      </div>
    </form>
  );
};

export default EditNote;
