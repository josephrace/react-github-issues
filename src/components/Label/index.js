import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const propTypes = {
  label: PropTypes.shape({
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

const Label = ({ label }) => {
  const color = label.color.startsWith('#') ? label.color : `#${label.color}`;

  return (
    <div className="label" style={{ backgroundColor: color }}>
      {label.name}
    </div>
  );
};

Label.propTypes = propTypes;

export default Label;
