const add = require("./add.js");

describe("test add positive scenarios", () => {
  test("add 1+1 should equal 2", () => {
    expect(add(1, 1)).toBe(2);
  });
});
