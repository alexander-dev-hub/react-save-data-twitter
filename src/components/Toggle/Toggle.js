
import React from 'react';
import Toggle from 'react-toggle';

import './style.css';

class ToggleSwitch extends React.Component {

  render () {
    const { ...rest } = this.props;
    return (
      <div className='switch-with-label'>
        <label>
          Data Saver
        </label>
        <Toggle { ...rest } />
      </div>
    );
  };
}

ToggleSwitch.defaultProps = {
  'data': {
    'user': {}
  }
};

ToggleSwitch.displayName = 'ToggleSwitch';

export default ToggleSwitch;