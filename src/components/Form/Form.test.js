import React from "react";
import { shallow } from "enzyme";
import Form from "./Form";
import content from "content/content";

describe("Form", () => {
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
