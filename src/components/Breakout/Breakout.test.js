import Breakout from './Breakout';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Breakout', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<Breakout />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
