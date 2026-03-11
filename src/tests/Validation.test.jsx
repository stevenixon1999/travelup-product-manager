import "./mockProductService";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("validation error appears for empty form", async () => {

  render(<App />);
  const user = userEvent.setup();

  const addButton = await screen.findByText("+ Add Product");

 await user.click(addButton);

  const saveButton = screen.getByRole("button", { name: "Add Product" });

 await user.click(saveButton);

  const errors = await screen.findAllByText(/required/i);

  expect(errors.length).toBeGreaterThan(0);

});