import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Resume from "./Resume";

describe("Resume", () => {
  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<Resume />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
