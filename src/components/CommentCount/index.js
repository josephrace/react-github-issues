import React from 'react';
import PropTypes from 'prop-types';
import CommentIcon from 'react-icons/lib/go/comment';
import './style.css';

const propTypes = {
  count: PropTypes.number.isRequired,
  link: PropTypes.string,
};

const CommentCount = ({ count, link }) =>
  count > 0 ? (
    <a className="comment-count" href={link}>
      <CommentIcon />
      {count}
    </a>
  ) : null;

CommentCount.propTypes = propTypes;

export default CommentCount;
