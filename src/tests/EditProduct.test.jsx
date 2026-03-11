import "./mockProductService";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("user can edit product", async () => {

  render(<App />);

  const editButtons = await screen.findAllByText("Edit");

  await userEvent.click(editButtons[0]);

  const titleInput = screen.getByPlaceholderText("Product Title");

  await userEvent.clear(titleInput);
  await userEvent.type(titleInput, "Updated Product");

  const saveButton = screen.getByText("Save");

  await userEvent.click(saveButton);

});