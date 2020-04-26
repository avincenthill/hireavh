import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Header from "./Header";

describe("Header", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Header />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
