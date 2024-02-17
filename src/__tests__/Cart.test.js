import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResturantMenu from "../components/ResturantMenu";
import MOCK_DATA from "./mocks/mockResRessponse.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";
import Cart from "../components/Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should load resturant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <ResturantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordionheader = screen.getByText("Breakfast & All Day Snacks (20)");
  fireEvent.click(accordionheader);
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  const addBtns = screen.getAllByText("Add +");
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("🛒-1")).toBeInTheDocument();
  //Go to the cart place
  fireEvent.click(screen.getByText("🛒-1"));
  expect(screen.getAllByTestId("foodItems").length).toBe(21); //20 from Resturant Menu and 1 we just added

  // Click on clear cart will reduce the foodItems by 1

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart 🗑️" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(20);
  expect(
    screen.getByText(
      "Your cart is empty. Please add something delicious from the menu"
    )
  ).toBeInTheDocument();
});
