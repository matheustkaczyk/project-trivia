import React from 'react';
import { string, func } from 'prop-types';

class Input extends React.Component {
  render() {
    const { itemName, name, type, testId, onChange, value, id } = this.props;
    return (
      <label htmlFor={ name }>
        {itemName}
        <input
          type={ type }
          name={ name }
          id={ id }
          onChange={ onChange }
          value={ value }
          data-testid={ testId }
        />
      </label>
    );
  }
}

Input.propTypes = {
  itemName: string.isRequired,
  name: string.isRequired,
  type: string.isRequired,
  onChange: func.isRequired,
  testId: string.isRequired,
  value: string.isRequired,
  id: string.isRequired,
};

export default Input;
