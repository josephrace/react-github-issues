import React from 'react';
import { shallow } from 'enzyme';
import Avatar from './';

describe('Avatar', () => {
  it('should render with an "avatar" class', () => {
    const wrapper = shallow(<Avatar url={''} />);

    expect(wrapper.hasClass('avatar')).toBeTruthy();
  });

  it('should render an img', () => {
    const wrapper = shallow(<Avatar url={''} />);

    expect(wrapper.type()).toBe('img');
  });

  it('should render the url prop as img src', () => {
    const url = 'http://images.com/foo.jpg';
    const wrapper = shallow(<Avatar url={url} />);

    expect(wrapper.prop('src')).toBe(url);
  });

  it('should pass through additional props', () => {
    const wrapper = shallow(<Avatar url={''} width={20} height={20} />);

    expect(wrapper.prop('width')).toBe(20);
    expect(wrapper.prop('height')).toBe(20);
  });
});
