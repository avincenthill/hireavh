import React from 'react';

import Resume from './Resume';
import renderer from 'react-test-renderer';

describe('Resume', () => {
  describe('snapshot', () => {
    it('should match the last saved snapshot', () => {
      const tree = renderer.create(<Resume />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
