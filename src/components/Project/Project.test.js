import React from "react";
// import { shallow } from "enzyme";
import renderer from "react-test-renderer";
import Project from "./Project";

describe("Project", () => {
  const fakeProject = {
    title: "Particle Simulation",
    url: "https://github.com/avincenthill/particle_simulation",
    displayUrl: "github.com/avincenthill/particle_simulation",
    description: "A particle system simulation in Processing.",
    longDescription: `PERSONAL PROJECT: Modeling chemical and physical reactions (chemical equilibria, fission, classical collisions, etc) with Processing/Java and rendering the simulation using PeasyCam. This link will lead to the source code, and you will need to install Processing to run it.`,
    img: {
      hasImg: true,
      module: "particles.img",
      emoji: "📦",
    },
  };

  describe("snapshot", () => {
    it("matches the last saved snapshot", () => {
      const tree = renderer.create(<Project project={fakeProject} />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
