import Form from "./Form";
import React from "react";
import content from "content/content";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

describe("Form", () => {
  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Form />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  describe("lifecycle methods", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = shallow(<Form />);
    });
    afterEach(() => {
      wrapper.unmount();
    });
    describe("constructor()", () => {
      it("should instantiate with the default config", () => {
        const instance = wrapper.instance();
        expect(instance.state.config).toEqual(content.form.formConfig);
      });
    });
    describe("componentDidMount()", () => {
      it("should call setOutputData", () => {
        const instance = wrapper.instance();
        const setOutputDataSpy = jest.spyOn(instance, "setOutputData");
        instance.componentDidMount();
        expect(setOutputDataSpy).toHaveBeenCalledTimes(1);
      });
      it("should call setRequiredFields", () => {
        const instance = wrapper.instance();
        const setOutputDataSpy = jest.spyOn(instance, "setRequiredFields");
        instance.componentDidMount();
        expect(setOutputDataSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
