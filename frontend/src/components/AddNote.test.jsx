import { render, screen, fireEvent } from "@testing-library/react";
import AddNote from "../components/AddNote";

describe("AddNote Component", () => {
  test("renders the AddNote component with initial state", () => {
    render(<AddNote onAddNote={() => {}} />);
    const addNoteButton = screen.getByRole("button", { name: "Add Note" });
    expect(addNoteButton).toBeInTheDocument();
  });

  test("toggles editing mode when Add Note button is clicked", () => {
    render(<AddNote onAddNote={() => {}} />);
    const addNoteButton = screen.getByRole("button", { name: "Add Note" });
    fireEvent.click(addNoteButton);

    const saveButton = screen.getByText("Save");
    const cancelButton = screen.getByText("Cancel");
    expect(saveButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();

    const titleInput = screen.getByPlaceholderText("Title");
    const contentTextarea = screen.getByPlaceholderText("Content");
    expect(titleInput).not.toHaveAttribute("readOnly");
    expect(contentTextarea).not.toHaveAttribute("readOnly");
  });
});
