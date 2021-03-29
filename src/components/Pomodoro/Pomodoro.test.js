import Pomodoro from './Pomodoro';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Pomodoro', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<Pomodoro />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
