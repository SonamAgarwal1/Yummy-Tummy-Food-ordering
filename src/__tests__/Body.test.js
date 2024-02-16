import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../components/Body";
import MOCK_DATA from "./mocks/resResListMock.json";
import { act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search res list for burger text input ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch?.length).toBe(20);
  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "burger" } });
  fireEvent.click(searchBtn);
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  //Assertion

  expect(cardsAfterSearch?.length).toBe(2);
});

it("Should search res list for Top rated resturants ", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const cardsBeforeClick = screen.getAllByTestId("resCard");
  expect(cardsBeforeClick?.length).toBe(20);
  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated Resturants",
  });
  fireEvent.click(topRatedBtn);
  const cardsAfterClick = screen.getAllByTestId("resCard");
  expect(cardsAfterClick?.length).toBe(18);
});
