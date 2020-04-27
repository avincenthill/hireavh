import Footer from "./Footer";
import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Footer", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Footer />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
