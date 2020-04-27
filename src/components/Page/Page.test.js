import Page from "./Page";
import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Page", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Page />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
