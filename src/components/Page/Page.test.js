import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Page from "./Page";

describe("Page", () => {
  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<Page />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
