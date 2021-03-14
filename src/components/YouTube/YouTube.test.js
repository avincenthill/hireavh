import React from 'react';
import YouTube from './YouTube';
import renderer from 'react-test-renderer';

describe('YouTube', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<YouTube />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
