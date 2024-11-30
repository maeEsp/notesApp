import { render } from "@testing-library/react";
import AddNote from "../components/AddNote";

test('should ', async () => { second })("renders AddNote component", () => {
  const { getByPlaceholderText } = render(<AddNote onAddNote={() => {}} />);
  expect(getByPlaceholderText("Title")).toBeInTheDocument();
  expect(getByPlaceholderText("Content")).toBeInTheDocument();
});
