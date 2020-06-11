import Header from "./Header";
import React from "react";
import renderer from "react-test-renderer";

describe("Header", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Header />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
