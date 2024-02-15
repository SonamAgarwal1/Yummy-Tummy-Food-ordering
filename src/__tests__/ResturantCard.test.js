import ResturantCard from "../components/ResturantCard";
import MOCK_DATA from "./mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { withPromtedLabel } from "../components/ResturantCard";

it("Should render the resturant card with res name", () => {
  render(<ResturantCard resObj={MOCK_DATA} />);
  const name = screen.getByText("NIC Ice Creams");
  expect(name).toBeInTheDocument();
});

// it("Should render with promoted label for Resturant Card", () => {
//   //   const ResturantCard = <ResturantCard resObj={MOCK_DATA} />;
//   //   jest.mock("./withSomeHOC", () => (Component) => (props) => (
//   //     <Component {...props} />
//   //   ));
//   render(
//     withPromtedLabel(() => (ResturantCard) => (MOCK_DATA) => (
//       <ResturantCard {...MOCK_DATA} />
//     ))
//   );
//   const promoted = screen.getByText("Pure veg");
//   console.log(promoted);
//   expect(promoted).toBeInTheDocument();
// });
