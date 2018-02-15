import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';
import './style.css';

const propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar_url: PropTypes.string.isRequired,
    })
  ),
};

const AvatarStack = ({ users }) => (
  <div className="avatar-stack">
    {users
      .reverse()
      .map(user => (
        <Avatar key={user.id} url={user.avatar_url} width={20} height={20} />
      ))}
  </div>
);

AvatarStack.propTypes = propTypes;

export default AvatarStack;
