import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Default from "./Default";

describe("Default", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Default />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
