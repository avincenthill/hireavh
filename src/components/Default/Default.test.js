import Default from "./Default";
import React from "react";
import renderer from "react-test-renderer";

describe("Default", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Default />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
