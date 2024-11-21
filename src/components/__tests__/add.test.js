import { add } from "../add";

test("Add function should add two numbers", () => {
    const result = add(3,5);
    expect(result).toBe(8);
});