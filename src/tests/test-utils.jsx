import { render } from "@testing-library/react";
import { ProductProvider } from "../context/ProductContext";

const customRender = (ui) => {
  return render(
    <ProductProvider>
      {ui}
    </ProductProvider>
  );
};

export * from "@testing-library/react";
export { customRender as render };