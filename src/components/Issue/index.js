import React from 'react';
import PropTypes from 'prop-types';
import { distanceInWords } from 'date-fns';
import { Box } from 'reflexbox';
import IssueOpenIcon from 'react-icons/lib/go/issue-opened';
import IssueClosedIcon from 'react-icons/lib/go/issue-closed';
import Label from '../Label';
import AvatarStack from '../AvatarStack';
import CommentCount from '../CommentCount';
import './style.css';

const propTypes = {
  issue: PropTypes.object.isRequired,
};

const Issue = ({ issue }) => {
  const openIssue = issue.state === 'open';
  const StateIcon = openIssue ? IssueOpenIcon : IssueClosedIcon;
  const stateIconColor = openIssue ? '#28a745' : '#cb2431';
  const niceCreatedAt = distanceInWords(new Date(), issue.created_at, {
    addSuffix: true,
  });

  return (
    <Box flex align="center" py={1} px={2} className="issue">
      <Box pr={2}>
        <StateIcon color={stateIconColor} width={16} height={16} />
      </Box>
      <Box auto pr={2}>
        <Box flex wrap align="center">
          <a className="issue-title" href={issue.html_url}>
            {issue.title}
          </a>
          <Box flex className="issue-labels">
            {issue.labels.map(label => <Label key={label.id} label={label} />)}
          </Box>
        </Box>
        <div className="issue-info">
          #{issue.number} opened {niceCreatedAt} by{' '}
          <a href={issue.user.html_url}>{issue.user.login}</a>
        </div>
      </Box>
      <Box flex justify="space-between" style={{ width: '100px' }}>
        <AvatarStack users={issue.assignees} />
        <CommentCount count={issue.comments} link={issue.html_url} />
      </Box>
    </Box>
  );
};

Issue.propTypes = propTypes;

export default Issue;
