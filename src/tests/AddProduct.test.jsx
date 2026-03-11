import "./mockProductService";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("user can add product", async () => {

  render(<App />);

  const addButton = await screen.findByText("+ Add Product");

  await userEvent.click(addButton);

  const titleInput = screen.getByLabelText("Product Title");

  await userEvent.type(titleInput, "Test Product");

  expect(titleInput).toHaveValue("Test Product");

});