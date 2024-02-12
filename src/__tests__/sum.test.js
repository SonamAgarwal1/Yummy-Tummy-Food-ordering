import { sum } from "../components/Sum";
test("Sum function to check the addition of two numbers", () => {
  const result = sum(3, 5);
  expect(result).toBe(8);
});
