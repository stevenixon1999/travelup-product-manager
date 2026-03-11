import "./mockProductService";
import { render, screen } from "./test-utils";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("user can delete product", async () => {

  render(<App />);

  const deleteButtons = await screen.findAllByText("Delete");

  await userEvent.click(deleteButtons[0]);

const confirmButton = (await screen.findAllByText("Delete"))[1];

  await userEvent.click(confirmButton);

});