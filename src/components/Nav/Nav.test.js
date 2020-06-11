import { Nav, NavList } from "./Nav";
import React from "react";
import renderer from "react-test-renderer";

describe("Nav", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Nav />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("NavList", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<NavList />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
