import React from "react";
// import { shallow } from "enzyme";
import SortList from "./SortList";
import renderer from "react-test-renderer";

// TBD mock list of sorts
// describe("SortList", () => {
//   describe("snapshot", () => {
//     it("should match the last saved snapshot", () => {
//       const tree = renderer.create(<SortList />).toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });
// });

it("adds correctly", () => {
  expect(1 + 1).toEqual(2);
});
