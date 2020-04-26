import React from "react";
import sorts from "content/sorts/sorts";

describe("Sort", () => {
  describe("sorting algorithms", () => {
    // test first 3 algos in sorts.data
    for (let i = 0; i < 3; i += 1) {
      let sort = sorts.data[i];
      let testArrays;
      describe(sort.title, () => {
        testArrays = [
          [],
          [1],
          [4, 2, 5, 2, 1],
          [2, 6, -3, 2, 1],
          [1, 2, 3, 4, 5, 6],
          [6, 5, 4, 3, 2, 1],
        ];
        testArrays.forEach((testArray, index) => {
          it(`should sort testArray ${index} correctly`, () => {
            let sortedTestArray = sort.fn(testArray, () => {});
            sortedTestArray.forEach((element, index) => {
              let prevElement = sortedTestArray[index - 1];
              if (prevElement) {
                expect(element).toBeGreaterThanOrEqual(
                  sortedTestArray[index - 1]
                );
              }
            });
          });
        });
      });
    }
  });
});
