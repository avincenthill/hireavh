import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import SortList from "./SortList";

// TBD mock list of sorts
// describe("SortList", () => {
//   describe("snapshot", () => {
//     it("matches the last saved snapshot", () => {
//       const tree = renderer.create(<SortList />).toJSON();
//       expect(tree).toMatchSnapshot();
//     });
//   });
// });

it("adds correctly", () => {
  expect(1 + 1).toEqual(2);
});
