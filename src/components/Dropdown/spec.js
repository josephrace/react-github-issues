import React from 'react';
import { shallow } from 'enzyme';
import TriangleDownIcon from 'react-icons/lib/go/triangle-down';
import Dropdown from './';

describe('Dropdown', () => {
  it('should render with a "dropdown" class', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown label="Dropdown" items={[]} onSelect={onSelect} />
    );

    expect(wrapper.hasClass('dropdown')).toBeTruthy();
  });

  it('should render the label', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown label="Dropdown" items={[]} onSelect={onSelect} />
    );

    expect(wrapper.find('.dropdown-label__text').text()).toBe('Dropdown');
  });

  it('should render a TriangleDownIcon component', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown label="Dropdown" items={[]} onSelect={onSelect} />
    );

    expect(wrapper.find(TriangleDownIcon).length).toBe(1);
  });

  it('should render a dropdown header if provided', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown
        label="Dropdown"
        items={[]}
        onSelect={onSelect}
        header="Select from items"
      />
    );

    expect(wrapper.find('.dropdown-item--header').text()).toBe(
      'Select from items'
    );
  });

  it('should render dropdown items', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown label="Dropdown" items={['Foo', 'Bar']} onSelect={onSelect} />
    );

    expect(wrapper.find('.dropdown-item').length).toBe(2);
  });

  it('should highlight selected dropdown item', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown
        label="Dropdown"
        items={['Foo', 'Bar']}
        selected="Foo"
        onSelect={onSelect}
      />
    );
    const dropdownItems = wrapper.find('.dropdown-item');

    expect(
      dropdownItems.first().hasClass('dropdown-item--selected')
    ).toBeTruthy();
  });

  it('should toggle active state', () => {
    const onSelect = jest.fn();
    const wrapper = shallow(
      <Dropdown label="Dropdown" items={[]} onSelect={onSelect} />
    );

    expect(wrapper.state('active')).toBeFalsy();
    expect(wrapper.hasClass('dropdown--active')).toBeFalsy();

    wrapper.find('.dropdown-label').simulate('click');

    expect(wrapper.state('active')).toBeTruthy();
    expect(wrapper.hasClass('dropdown--active')).toBeTruthy();

    wrapper.find('.dropdown-label').simulate('click');

    expect(wrapper.state('active')).toBeFalsy();
    expect(wrapper.hasClass('dropdown--active')).toBeFalsy();
  });

  it('should call onSelect when item clicked', () => {
    const onSelect = jest.fn();
    const items = ['Foo', 'Bar'];
    const wrapper = shallow(
      <Dropdown label="Dropdown" items={items} onSelect={onSelect} />
    );
    const dropdownItems = wrapper.find('.dropdown-item');

    dropdownItems.first().simulate('click');

    expect(onSelect).toHaveBeenCalledWith(items[0]);
  });
});
