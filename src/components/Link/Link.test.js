import Link from "./Link";
import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Link", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Link />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
