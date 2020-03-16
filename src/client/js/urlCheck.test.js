import { urlCheck } from "./urlCheck";

describe("test", () => {
  it("Valid URL", () => {
    expect(urlCheck("https://www.google.com/")).toBe(true);
  });

  it("Invalid URL", () => {
    expect(urlCheck("Not Valid")).toBe(false);
  });
});
