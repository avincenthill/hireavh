import Post from "./Post";
import React from "react";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";

const fakeMd = require("../../content/blogs/md/recruiter-faq.md");

describe("Post", () => {
  const fakeBlog = {
    title: "fake FAQ",
    url: "blog/fake-faq",
    description: "fake description",
    longDescription: `fake long description`,
    md: fakeMd,
    img: {
      emoji: "🤷",
    },
  };

  describe("snapshot", () => {
    it("should match the last saved snapshot", () => {
      const tree = renderer.create(<Post blog={fakeBlog} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe("lifecycle", () => {
    let wrapper;
    let instance;
    let fakeFetchMd;

    beforeEach(() => {
      fakeFetchMd = jest.fn(() => "<h1>fakeMd</h1>");
      wrapper = shallow(<Post blog={fakeBlog} />, {
        disableLifecycleMethods: true,
      });
      instance = wrapper.instance();
      instance.fetchMd = fakeFetchMd;
    });

    afterEach(() => {
      wrapper.unmount();
    });

    describe("componentDidMount", () => {
      it("should call fetchMd", async () => {
        await instance.componentDidMount();
        expect(fakeFetchMd).toHaveBeenCalledTimes(1);
      });
    });

    describe("render", () => {
      it("should call renderMdFile", () => {
        const renderMdString = jest.spyOn(instance, "renderMdString");
        instance.render();
        expect(renderMdString).toHaveBeenCalledTimes(1);
      });
      it("should set rendered markdown string as html", async () => {
        await instance.componentDidMount();
        // need .render() here to evaluate dangerouslySetInnerHTML
        expect(
          wrapper.find('[data-testid="md-html"]').render().text()
        ).toContain("fakeMd");
      });
    });
  });
});
