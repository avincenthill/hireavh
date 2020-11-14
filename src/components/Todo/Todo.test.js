import React from 'react';
import Todo from './Todo';
import renderer from 'react-test-renderer';

describe('Todo', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<Todo />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
