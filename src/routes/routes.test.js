// app.test.js
import About from "components/About/About";
import App from "./routes";
import Contact from "components/Contact/Contact";
import Form from "components/Form/Form";
import NotFound from "components/NotFound/NotFound";
import React from "react";
import Resume from "components/Resume/Resume";
import { Route } from "react-router";
import SortList from "components/SortList/SortList";
import { shallow } from "enzyme";

describe("routes", () => {
  const wrapper = shallow(<App />);
  const pathMap = wrapper.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});

  describe("/", () => {
    test("should route to About", () => {
      expect(pathMap["/"]).toBe(About);
    });
  });
  describe("/home", () => {
    test("should route to About", () => {
      expect(pathMap["/home"]).toBe(About);
    });
  });
  describe("/about", () => {
    test("should route to About", () => {
      expect(pathMap["/about"]).toBe(About);
    });
  });
  describe("/resume", () => {
    test("should route to Resume", () => {
      expect(pathMap["/resume"]).toBe(Resume);
    });
  });
  describe("/contact", () => {
    test("should route to Contact", () => {
      expect(pathMap["/contact"]).toBe(Contact);
    });
  });
  describe("/sorting-algorithms", () => {
    test("should route to SortList", () => {
      expect(pathMap["/sorting-algorithms"]).toBe(SortList);
    });
  });
  describe("/dynamic-form", () => {
    test("should route to Form", () => {
      expect(pathMap["/dynamic-form"]).toBe(Form);
    });
  });
  describe("undefined", () => {
    test("should route to NotFound", () => {
      expect(pathMap[undefined]).toBe(NotFound);
    });
  });
});
