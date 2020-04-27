import styles from "./styleconfig";

describe("styleconfig", () => {
  describe("color themes", () => {
    describe("invertColor()", () => {
      const invertedColorTuples = [
        ["#3366cc", "#cc9933"],
        ["#A3c7ff", "#5c3800"],
        ["#000000", "#ffffff"],
      ];
      invertedColorTuples.forEach((colorTuples) => {
        it(`should correctly invert the color ${colorTuples[0]}`, () => {
          expect(styles.invertColor(colorTuples[0])).toEqual(colorTuples[1]);
        });
      });
    });
  });
});
