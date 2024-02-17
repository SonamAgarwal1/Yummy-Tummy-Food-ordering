import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResturantMenu from "../components/ResturantMenu";
import MOCK_DATA from "./mocks/mockResRessponse.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import Header from "../components/Header";

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
});
