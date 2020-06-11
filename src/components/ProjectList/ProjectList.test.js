import ProjectList from "./ProjectList";
import React from "react";
import renderer from "react-test-renderer";

describe("ProjectList", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<ProjectList />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
