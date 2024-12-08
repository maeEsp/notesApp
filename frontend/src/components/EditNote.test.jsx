import { render, screen, fireEvent } from "@testing-library/react";
import EditNote from "../components/EditNote";

describe("EditNote component - Rendering and Initial Values", () => {
  it("renders correctly and displays initial values", () => {
    const note = { title: "Test Title", content: "Test Content" };

    // Render the component
    render(<EditNote note={note} onSave={() => {}} onCancel={() => {}} />);

    // Check if the title and content inputs are rendered with the correct initial values
    const titleInput = screen.getByPlaceholderText("Title");
    const contentTextarea = screen.getByPlaceholderText("Content");

    if (!titleInput || !contentTextarea) {
      throw new Error("Title or Content input fields are missing.");
    }

    expect(titleInput.value).toBe(note.title);
    expect(contentTextarea.value).toBe(note.content);
  });
});

describe("EditNote component - Handling User Input", () => {
  it("manipulates the inputs correctly", () => {
    const note = { title: "Test Title", content: "Test Content" };

    // Render the component
    render(<EditNote note={note} onSave={() => {}} onCancel={() => {}} />);

    // Find the input fields and simulate user interaction
    const titleInput = screen.getByPlaceholderText("Title");
    const contentTextarea = screen.getByPlaceholderText("Content");

    // Simulate user typing into the title input
    fireEvent.change(titleInput, { target: { value: "Updated Title" } });
    expect(titleInput.value).toBe("Updated Title");

    // Simulate user typing into the content textarea
    fireEvent.change(contentTextarea, { target: { value: "Updated Content" } });
    expect(contentTextarea.value).toBe("Updated Content");

    // Simulate a click on the "Save" button
    const saveButton = screen.getByText("Save");
    if (!saveButton) {
      throw new Error("Save button is missing.");
    }
    fireEvent.click(saveButton);

    // Simulate a click on the "Cancel" button
    const cancelButton = screen.getByText("Cancel");
    if (!cancelButton) {
      throw new Error("Cancel button is missing.");
    }
    fireEvent.click(cancelButton);
  });
});
