
import React, { Component } from 'react';

import Tweet from './components/Tweet/Tweet';
import Nav from './components/Nav/Nav';
import tweets from './data/tweets';
import './App.css';

const linkProps = { target: '_blank' };

class App extends Component {
  state = {
    saveDataEnabled: false,
    manualSaveDataEnabled: false,
    imagePathCriteria: 'heavy'
  };

  toggleSaveDataHandler = event => {
    this.setState({
      saveDataEnabled: event.target.checked,
      imagePathCriteria: !this.state.saveDataEnabled ? 'light': 'heavy'
    });
  };

  enableClientSaveDataHandler = event => {
    this.setState({
      manualSaveDataEnabled: event.target.checked
    });
  };

  getDataHandler(saveDataEnabled) {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'save-data': {saveDataEnabled} ? 'on': 'off'
    });

    fetch('/save-data', {headers: myHeaders}).then(response => response.json())
      .then(result => { this.setState({imagePathCriteria: result.imagePathCriteria});
    })
    .catch(error => {
      console.log('[App getDataHandler] error =>', error);
    });
  }

  componentDidMount() {
    const { manualSaveDataEnabled, saveDataEnabled } = this.state;
    if (!manualSaveDataEnabled && saveDataEnabled)
      this.getDataHandler(saveDataEnabled);
  }

  componentDidUpdate(prevProps, prevState) {
    const { manualSaveDataEnabled, saveDataEnabled} = this.state;
    if (!manualSaveDataEnabled && saveDataEnabled !== prevState.saveDataEnabled) {
      this.getDataHandler(saveDataEnabled);
    }
  }

  render() {
    const { manualSaveDataEnabled, saveDataEnabled, imagePathCriteria } = this.state;
    return (
      <div className='TweetPage'>
        <Nav 
          disabled={!manualSaveDataEnabled}
          toggled={saveDataEnabled}
          toggleHandler={this.toggleSaveDataHandler}
          checked={manualSaveDataEnabled}
          checkHandler={this.enableClientSaveDataHandler}/>
        <div className='tweet-stream'>
          {tweets.map((tweet, ith) => (
            <Tweet autoPlay={true} data={tweet} key={ith} linkProps={linkProps} imagePathCriteria={`assets/images/${imagePathCriteria}/${ith+1}.jpg`} />
          ))}
        </div>
      </div>
    );
  }
};

export default App;
