import Post from "./Post";
import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";

describe("Post", () => {
  const fakeBlog = {
    title: "Recruiter FAQ",
    url: "blog/recruiter-faq",
    description: "Answers to common questions I get from recruiters.",
    longDescription: `An attempt to save you, the recruiter, some time, with a centralized resource answering the most common questions I receive during screening calls.  I'm looking forward to speaking with you further!`,
    md: "recruiterFaq.md",
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
});
