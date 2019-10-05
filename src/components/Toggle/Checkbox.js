
import React, { Component } from 'react';

import './styles.css';

class Checkbox extends Component {
  render () {
    const { ...rest } = this.props;
    return (
      <div className='switch-with-label'>
        <label>
          <input type='checkbox' {...rest} />
          Testing Save-Data on Client 
        </label>
      </div>
    );
  };
}

export default Checkbox;
