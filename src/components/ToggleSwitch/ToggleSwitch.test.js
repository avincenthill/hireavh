import React from "react";
import ToggleSwitch from "./ToggleSwitch";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("ToggleSwitch", () => {
  const mockTextOptions = ["0", "1"];

  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer
        .create(<ToggleSwitch text={mockTextOptions} />)
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("methods", () => {
    let wrapper, instance, mockOnChange;

    afterEach(() => {
      wrapper.unmount();
    });

    describe("onChange", () => {
      const mockCheckingEvent = {
        preventDefault() {},
        target: { checked: true },
      };

      it("should toggle checked state on change event", () => {
        wrapper = shallow(<ToggleSwitch text={mockTextOptions} />);
        instance = wrapper.instance();

        expect(instance.state.checked).toEqual(false);

        wrapper.find("input").simulate("change", mockCheckingEvent);

        expect(instance.state.checked).toEqual(true);
      });

      it("should invoke an onChange function callback onChange if it exists", () => {
        mockOnChange = jest.fn();
        wrapper = shallow(
          <ToggleSwitch text={mockTextOptions} onChange={mockOnChange} />
        );
        instance = wrapper.instance();
        expect(mockOnChange).toHaveBeenCalledTimes(0);

        wrapper.find("input").simulate("change", mockCheckingEvent);

        expect(mockOnChange).toHaveBeenCalledTimes(1);
      });
    });
  });
});
