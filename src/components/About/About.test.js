import About from './About';
import React from 'react';
import renderer from 'react-test-renderer';

describe('About', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<About />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
