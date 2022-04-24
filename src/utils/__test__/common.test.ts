import { splitCamelCase } from "../common";

describe("common", () => {
  it("splitCamelCase", () => {
    expect(splitCamelCase("camelCase")).toBe("camel Case");
  });
});
