import React from 'react';
import { shallow } from 'enzyme';
import Container from './';

describe('Container', () => {
  it('should render with a "container" class', () => {
    const wrapper = shallow(<Container />);

    expect(wrapper.hasClass('container')).toBeTruthy();
  });

  it('should render children', () => {
    const wrapper = shallow(
      <Container>
        <h1>Title</h1>
      </Container>
    );

    expect(wrapper.children().type()).toBe('h1');
    expect(wrapper.text()).toBe('Title');
  });
});
