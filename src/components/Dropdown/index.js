import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import TriangleDownIcon from 'react-icons/lib/go/triangle-down';
import './style.css';

const propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.string,
  header: PropTypes.string,
};

class Dropdown extends Component {
  state = {
    active: false,
  };

  handleToggle = () => this.setState({ active: !this.state.active });

  render() {
    const { label, items, onSelect, selected, header } = this.props;
    const { active } = this.state;

    return (
      <div className={cn('dropdown', { 'dropdown--active': active })}>
        <div className="dropdown-label" onClick={this.handleToggle}>
          <div className="dropdown-label__text">{label}</div>
          <TriangleDownIcon
            className="dropdown-label__icon"
            width={12}
            height={12}
          />
        </div>
        <div className="dropdown-menu">
          {header && (
            <div className="dropdown-item dropdown-item--header">{header}</div>
          )}
          {items.map(item => (
            <div
              key={item}
              className={cn('dropdown-item', {
                'dropdown-item--selected': item === selected,
              })}
              onClick={() => onSelect(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = propTypes;

export default Dropdown;
