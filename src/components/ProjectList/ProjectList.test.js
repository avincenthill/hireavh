import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import ProjectList from "./ProjectList";

describe("ProjectList", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<ProjectList />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
