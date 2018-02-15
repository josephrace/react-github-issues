import React from 'react';
import { shallow } from 'enzyme';
import { distanceInWords } from 'date-fns';
import IssueOpenIcon from 'react-icons/lib/go/issue-opened';
import IssueClosedIcon from 'react-icons/lib/go/issue-closed';
import Issue from './';
import Label from '../Label';
import AvatarStack from '../AvatarStack';
import CommentCount from '../CommentCount';

const seedIssue = {
  state: 'open',
  title: 'Foo',
  html_url: 'http://',
  labels: [
    { id: '1', name: 'Chore', color: '#ff0000' },
    { id: '2', name: 'Task', color: '#ffff00' },
  ],
  number: '12345',
  created_at: new Date(),
  user: {
    login: 'Bill',
  },
  comments: 0,
  assignees: [],
};

describe('Issue', () => {
  it('should render with an "issue" class', () => {
    const wrapper = shallow(<Issue issue={seedIssue} />);

    expect(wrapper.hasClass('issue')).toBeTruthy();
  });

  it('should render the open state icon', () => {
    const openIssue = { ...seedIssue };
    const wrapper = shallow(<Issue issue={openIssue} />);

    expect(wrapper.find(IssueOpenIcon).length).toBe(1);
  });

  it('should render the closed state icon', () => {
    const closedIssue = { ...seedIssue, state: 'closed' };
    const wrapper = shallow(<Issue issue={closedIssue} />);

    expect(wrapper.find(IssueClosedIcon).length).toBe(1);
  });

  it('should render the issue title link', () => {
    const wrapper = shallow(<Issue issue={seedIssue} />);
    const issueTitle = wrapper.find('.issue-title');

    expect(issueTitle.prop('href')).toBe(seedIssue.html_url);
    expect(issueTitle.text()).toBe(seedIssue.title);
  });

  it('should render the issue labels', () => {
    const wrapper = shallow(<Issue issue={seedIssue} />);

    expect(wrapper.find(Label).length).toBe(2);
  });

  it('should render issue info', () => {
    const wrapper = shallow(<Issue issue={seedIssue} />);
    const issueInfo = wrapper.find('.issue-info');
    const niceCreatedAt = distanceInWords(new Date(), seedIssue.created_at, {
      addSuffix: true,
    });

    expect(issueInfo.text()).toEqual(
      `#${seedIssue.number} opened ${niceCreatedAt} by ${seedIssue.user.login}`
    );
  });

  it('should render an AvatarStack', () => {
    const wrapper = shallow(<Issue issue={seedIssue} />);

    expect(wrapper.find(AvatarStack).length).toBe(1);
  });

  it('should render a CommentCount', () => {
    const wrapper = shallow(<Issue issue={seedIssue} />);

    expect(wrapper.find(CommentCount).length).toBe(1);
  });
});
