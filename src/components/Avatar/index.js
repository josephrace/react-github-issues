import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propTypes = {
  url: PropTypes.string.isRequired,
};

const Avatar = ({ url, ...props }) => (
  <img className="avatar" src={url} alt="" {...props} />
);

Avatar.propTypes = propTypes;

export default Avatar;
