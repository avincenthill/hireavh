import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import About from "./About";

describe("About", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<About />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
