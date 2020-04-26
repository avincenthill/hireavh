import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Link from "./Link";

describe("Link", () => {
  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<Link />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
