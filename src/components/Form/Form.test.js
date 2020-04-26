import React from "react";
import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Form from "./Form";
import content from "content/content";

describe("Form", () => {
  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<Form />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  }),
    describe("lifecycle", () => {
      let wrapper;
      beforeEach(() => {
        wrapper = shallow(<Form />);
      });
      describe("constructor", () => {
        it("should instantiate with the default config", () => {
          const instance = wrapper.instance();
          expect(instance.state.config).toEqual(content.form.formConfig);
        });
      });
      describe("componentDidMount", () => {
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
