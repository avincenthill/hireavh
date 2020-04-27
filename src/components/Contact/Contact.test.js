import Contact from "./Contact";
import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Contact", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Contact />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
