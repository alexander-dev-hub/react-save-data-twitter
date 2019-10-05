
import React, { Component } from 'react';
import Toggle from 'react-toggle';

import '../../App.css';

class ToggleSwitch extends Component {
  render () {
    const { ...rest } = this.props;
    return (
      <div className='switch-with-label'>
        <label>
          Save Data
        </label>
        <Toggle { ...rest } />
      </div>
    );
  };
}

export default ToggleSwitch;
