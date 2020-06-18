import analytics from ".";

describe("analytics", () => {
  describe("init", () => {
    it("should push the correct data to datalayer", () => {
      const mockDataLayer = [];
      window.dataLayer = mockDataLayer;
      const date = new Date();
      // TBD make google analytics property id env var
      const data = [
        ["js", date],
        ["config", "UA-164620923-1"],
      ];
      analytics.init(date);

      expect(window.dataLayer.length).toEqual(2);
      data.forEach((datum, i) => {
        datum.forEach((element, j) => {
          expect(window.dataLayer[i][j]).toEqual(element);
        });
      });
    });

    it("should instantiate an array if window.dataLayer is undefined", () => {
      const mockDataLayer = undefined;
      window.dataLayer = mockDataLayer;

      analytics.init(new Date());

      expect(window.dataLayer).not.toEqual(undefined);
    });
  });
});
