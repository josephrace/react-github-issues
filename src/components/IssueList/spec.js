import React from 'react';
import { shallow } from 'enzyme';
import IssueList from './';

describe('IssueList', () => {
  it('should display a loading message', () => {
    const wrapper = shallow(<IssueList />);

    expect(wrapper.html()).toBe('<p>Fetching issues...</p>');
  });

  // TODO: tests with issues
});
