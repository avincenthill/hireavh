import React from 'react';

import SortList from './SortList';
import renderer from 'react-test-renderer';

describe('SortList', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<SortList />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
