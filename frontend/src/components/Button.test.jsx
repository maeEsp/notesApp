import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("Button Component", () => {
  test("renders with the correct label", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies the correct type", () => {
    render(<Button label="Submit" type="submit" />);
    const buttonElement = screen.getByRole("button", { name: /submit/i });
    expect(buttonElement).toHaveAttribute("type", "submit");
  });

  test("applies additional CSS classes", () => {
    const className = "bg-blue-500 text-white";
    render(<Button label="Styled Button" className={className} />);
    const buttonElement = screen.getByRole("button", { name: /styled button/i });
    expect(buttonElement).toHaveClass("px-4 py-2 rounded");
    expect(buttonElement).toHaveClass("bg-blue-500 text-white");
  });

  test("calls the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("does not throw error if onClick is not provided", () => {
    render(<Button label="Click Me" />);
    const buttonElement = screen.getByRole("button", { name: /click me/i });
    expect(() => fireEvent.click(buttonElement)).not.toThrow();
  });
});
