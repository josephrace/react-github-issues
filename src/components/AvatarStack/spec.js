import React from 'react';
import { shallow, mount } from 'enzyme';
import AvatarStack from './';
import Avatar from '../Avatar';

describe('AvatarStack', () => {
  it('should render with an "avatar-stack" class', () => {
    const wrapper = shallow(<AvatarStack users={[]} />);

    expect(wrapper.hasClass('avatar-stack')).toBeTruthy();
  });

  it('should render X number of Avatar components for users', () => {
    const users = [
      { id: 1, avatar_url: 'http://' },
      { id: 2, avatar_url: 'http://' },
    ];
    const wrapper = shallow(<AvatarStack users={users} />);

    expect(wrapper.find(Avatar).length).toBe(users.length);
  });
});
