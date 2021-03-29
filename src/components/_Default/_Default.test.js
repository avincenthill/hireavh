import React from 'react';
import _Default from './_Default';
import renderer from 'react-test-renderer';

describe('_Default', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<_Default />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
