import React from "react";
import Sort from "components/Sort/Sort";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import sorts from "content/sorts/sorts";

describe("Sort", () => {
  const testSortData = sorts.data[0];

  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Sort sort={testSortData} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("lifecycle methods", () => {
    let wrapper;
    let instance;

    beforeEach(() => {
      wrapper = shallow(<Sort sort={testSortData} />, {
        disableLifecycleMethods: true,
      });
      instance = wrapper.instance();
    });

    afterEach(() => {
      wrapper.unmount();
    });

    describe("constructor()", () => {
      it("should instantiate with default state", () => {
        const defaultState = {
          canvas: null,
          ctx: null,
          history: [],
          currentFrame: 0,
          interval: null,
          isRunning: false,
        };
        for (let key in defaultState) {
          expect(instance.state[key]).toEqual(defaultState[key]);
        }
      });
    });

    describe("componentDidMount()", () => {
      it("should call initArray", () => {
        const initArraySpy = jest.spyOn(instance, "initArray");
        instance.componentDidMount();
        expect(initArraySpy).toHaveBeenCalledTimes(1);
      });
      it("should call initCanvas", () => {
        const initCanvasSpy = jest.spyOn(instance, "initCanvas");
        instance.componentDidMount();
        expect(initCanvasSpy).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("methods", () => {
    let wrapper;
    let instance;
    let spies;

    // mock all component methods
    // you will have to mockRestore() to call and test
    const createSpies = (inst) => {
      const methods = [
        "initCanvas",
        "clearCanvas",
        "initArray",
        "createHistory",
        "drawBar",
        "takeSnapshot",
        "clearHistory",
        "initCurrentFrame",
        "renderSnapshot",
        "renderFrame",
        "stopRendering",
        "startRendering",
        "stepThruSort",
        "restartSort",
      ];
      const spies = {};
      for (let method of methods) {
        spies[method] = jest.spyOn(inst, method).mockImplementation(() => {});
      }
      return spies;
    };

    beforeEach(() => {
      // instantiate shallow wrapper of Sort
      wrapper = shallow(<Sort sort={testSortData} />, {
        disableLifecycleMethods: true,
      });
      instance = wrapper.instance();

      // mock setState synchronously
      jest.spyOn(instance, "setState").mockImplementation((newState, cb) => {
        instance.state = { ...instance.state, ...newState };
        if (cb) {
          cb();
        }
      });

      // mock all component methods
      spies = createSpies(instance);
    });

    afterEach(() => {
      wrapper.unmount();
    });

    describe("initCanvas()", () => {
      let mockGetRefs = (prop) => {
        return {
          offsetWidth: 100,
          offsetHeight: 100,
          getContext: () => {
            return "fakeCtx";
          },
        };
      };
      it("should call clearCanvas", () => {
        jest.spyOn(instance, "getRefs").mockImplementation(mockGetRefs);
        instance.initCanvas.mockRestore();
        instance.initCanvas();

        expect(spies.clearCanvas).toHaveBeenCalledTimes(1);
      });
      it("should call renderFrame", () => {
        jest.spyOn(instance, "getRefs").mockImplementation(mockGetRefs);
        instance.initCanvas.mockRestore();
        instance.initCanvas();

        expect(spies.clearCanvas).toHaveBeenCalledTimes(1); // });
      });
    });

    describe("initArray()", () => {
      it("should store an array in state", () => {
        instance.initArray.mockRestore();
        instance.initArray();

        expect(instance.state.array.length).toBe(sorts.numBars);
      });
      it("should call createHistory", () => {
        instance.initArray.mockRestore();
        instance.initArray();

        expect(spies.createHistory).toHaveBeenCalledTimes(1);
      });
    });

    describe("createHistory()", () => {
      it("should call props.sort.fn with array in state and snapshot fn", () => {
        const spyPropsSortFn = jest
          .spyOn(testSortData, "fn")
          .mockImplementation(() => {});
        instance.componentDidMount();
        instance.createHistory.mockRestore();
        instance.createHistory();

        expect(spyPropsSortFn).toHaveBeenCalledTimes(1);
        expect(spyPropsSortFn).toBeCalledWith(
          instance.state.array,
          instance.takeSnapshot
        );

        spyPropsSortFn.mockRestore();
      });
    });

    describe("takeSnapshot()", () => {
      it("should push a snapshot object to history in state", () => {
        const order = [2, 3, 4, 1, 4];
        const emph1 = 1;
        const emph2 = 2;
        const emph3 = 3;
        const fakeSnapshot = {
          order,
          emph1,
          emph2,
          emph3,
        };
        instance.takeSnapshot.mockRestore();
        instance.takeSnapshot(order, emph1, emph2, emph3);

        expect(
          instance.state.history[instance.state.history.length - 1]
        ).toStrictEqual(fakeSnapshot);
      });
    });

    describe("clearHistory()", () => {
      it("should change state.history to an empty array", () => {
        instance.state.history = [1, 2, 3, 4];
        instance.clearHistory.mockRestore();
        instance.clearHistory();

        expect(instance.state.history.length).toBe(0);
      });
    });

    describe("initCurrentFrame()", () => {
      it("should set state.currentFrame to 0", () => {
        instance.state.currentFrame = 5;
        instance.initCurrentFrame.mockRestore();
        instance.initCurrentFrame();

        expect(instance.state.currentFrame).toBe(0);
      });
    });

    describe("renderSnapshot()", () => {
      let order, emph1, emph2, emph3, fakeSnapshot;

      beforeEach(() => {
        instance.state.canvas = {};
        instance.state.canvas.height = 1;
        order = [2, 3, 4, 1, 4];
        emph1 = 1;
        emph2 = 2;
        emph3 = 3;
        fakeSnapshot = {
          order,
          emph1,
          emph2,
          emph3,
        };
      });

      it("should call clearCanvas", () => {
        instance.renderSnapshot.mockRestore();
        instance.renderSnapshot(fakeSnapshot);

        expect(spies.clearCanvas).toHaveBeenCalledTimes(1);
      });
      it("should call drawBar for every bar", () => {
        instance.renderSnapshot.mockRestore();
        instance.renderSnapshot(fakeSnapshot);

        expect(spies.drawBar).toHaveBeenCalledTimes(order.length);
      });
    });

    describe("stopRendering()", () => {
      it("should change state to stopped", () => {
        instance.state.isRunning = true;
        instance.stopRendering.mockRestore();
        instance.stopRendering();

        expect(instance.state.isRunning).toBe(false);
      });
    });
  });

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
