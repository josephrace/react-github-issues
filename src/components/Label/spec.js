import React from 'react';
import { shallow } from 'enzyme';
import Label from './';

describe('Label', () => {
  it('should render with a "label" class', () => {
    const label = { color: '#ff0000', name: 'Chore' };
    const wrapper = shallow(<Label label={label} />);

    expect(wrapper.hasClass('label')).toBeTruthy();
  });

  it('should render label name', () => {
    const label = { color: '#ff0000', name: 'Chore' };
    const wrapper = shallow(<Label label={label} />);

    expect(wrapper.text()).toBe(label.name);
  });

  describe('backgroundColor style from color prop', () => {
    it('should not change color value if starts with #', () => {
      const label = { color: '#ff0000', name: 'Chore' };
      const wrapper = shallow(<Label label={label} />);

      expect(wrapper.prop('style').backgroundColor).toBe(label.color);
    });

    it('should add # to start of color value if not present', () => {
      const label = { color: 'ff0000', name: 'Chore' };
      const wrapper = shallow(<Label label={label} />);

      expect(wrapper.prop('style').backgroundColor).toBe(`#${label.color}`);
    });
  });
});
