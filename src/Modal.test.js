import { render, screen, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal Component - Day 23 Challenge", () => {
  test("should call onClose when Escape key is pressed", () => {
    // 1. Setup: Mock the onClose function
    const handleClose = jest.fn();

    // 2. Render the component
    render(
      <Modal isOpen={true} onClose={handleClose} title="Test Modal">
        <p>Modal Content</p>
      </Modal>,
    );

    // 3. Action: Simulate pressing the Escape key on the document
    fireEvent.keyDown(document, { key: "Escape", code: "Escape" });

    // 4. Assertion: Check if the mock function was called
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  test("should not render when isOpen is false", () => {
    render(<Modal isOpen={false} onClose={() => {}} title="Hidden" />);

    const modalTitle = screen.queryByText(/Hidden/i);
    expect(modalTitle).not.toBeInTheDocument();
  });
});
