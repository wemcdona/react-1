const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("formats 1234 as '1,234'", () => {
    expect(addCommas(1234)).toBe("1,234");
  });

  test("formats 1000000 as '1,000,000'", () => {
    expect(addCommas(1000000)).toBe("1,000,000");
  });

  test("formats 1000 as '1,000'", () => {
    expect(addCommas(1000)).toBe("1,000");
  });

  test("formats 1234567 as '1,234,567'", () => {
    expect(addCommas(1234567)).toBe("1,234,567");
  });

  test("formats 9876543210 as '9,876,543,210'", () => {
    expect(addCommas(9876543210)).toBe("9,876,543,210");
  });

  test("formats 100 as '100'", () => {
    expect(addCommas(100)).toBe("100");
  });

  test("formats -1234567 as '-1,234,567'", () => {
    expect(addCommas(-1234567)).toBe("-1,234,567");
  });

  test("formats 0 as '0'", () => {
    expect(addCommas(0)).toBe("0");
  });

  test("formats 1234.5678 as '1,234.5678'", () => {
    expect(addCommas(1234.5678)).toBe("1,234.5678");
  });

  test("formats -9876543210 as '-9,876,543,210'", () => {
    expect(addCommas(-9876543210)).toBe("-9,876,543,210");
  });
});
