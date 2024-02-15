import Contact from "../components/Contact";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
//describe is to group the test cases together
describe("To test contact us", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    //Querying
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });

  //it and test are alias and used for same thing.
  it("Should load the button in the component", () => {
    render(<Contact />);
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load the input textbox with the help of placeholder", () => {
    render(<Contact />);
    const inputText = screen.getByPlaceholderText("Name");
    expect(inputText).toBeInTheDocument();
  });

  test("Should load 2 input elements", () => {
    render(<Contact />);
    const input = screen.getAllByRole("textbox");
    //console.log(input);
    expect(input?.length).toBe(2);
  });
});
