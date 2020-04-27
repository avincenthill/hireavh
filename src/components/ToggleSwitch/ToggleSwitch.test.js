import React from "react";
// import { shallow } from "enzyme";
import ToggleSwitch from "./ToggleSwitch";
import renderer from "react-test-renderer";

describe("ToggleSwitch", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<ToggleSwitch text={["0", "1"]} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
