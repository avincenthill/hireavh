import NotFound from "./NotFound";
import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("NotFound", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<NotFound />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
