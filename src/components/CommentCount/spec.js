import React from 'react';
import { shallow } from 'enzyme';
import CommentIcon from 'react-icons/lib/go/comment';
import CommentCount from './';

describe('CommentCount', () => {
  it('should not render if count is 0', () => {
    const wrapper = shallow(<CommentCount count={0} />);

    expect(wrapper.type()).toBe(null);
  });

  it('should render with a "comment-count" class', () => {
    const wrapper = shallow(<CommentCount count={1} />);

    expect(wrapper.hasClass('comment-count')).toBeTruthy();
  });

  it('should include a CommentIcon component', () => {
    const wrapper = shallow(<CommentCount count={1} />);

    expect(wrapper.find(CommentIcon).length).toBe(1);
  });

  it('should render the count', () => {
    const wrapper = shallow(<CommentCount count={99} />);

    expect(wrapper.text()).toBe(`<GoComment />99`);
  });

  it('should pass link prop to href', () => {
    const link = 'http://foo.com';
    const wrapper = shallow(<CommentCount count={1} link={link} />);

    expect(wrapper.prop('href')).toBe(link);
  });
});
