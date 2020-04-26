import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import { Nav, NavList } from "./Nav";

describe("Nav", () => {
  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<Nav />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});

describe("NavList", () => {
  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<NavList />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
