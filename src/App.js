
import React, { Component } from 'react';

import Tweet from './components/Tweet/Tweet';
import tweets from './data/tweets';
import Nav from './components/Nav/Nav';
import './App.css';

const linkProps = { target: '_blank' };

class App extends Component {

  state = {
    dataSaverEnabled: false,
    imagePath: ''
  };

  toggleDataSaverHandler = event => {
    this.setState({
      dataSaverEnabled: event.target.checked
    });
  };

  fetchData(dataSaverEnabled) {
    const myHeaders = new Headers({
      'Content-Type': 'application/json',
      'save-data': 'on'
    });

    fetch("/datasaver", {headers: myHeaders}).then(response => response.json())
    .then(result => { this.setState({imagePath: result.imagePath});
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    this.fetchData(this.state.dataSaverEnabled);
  }

  componentDidUpdate(prevProps, prevState) {
    const {dataSaverEnabled} = this.state;
    if (dataSaverEnabled !== prevState.dataSaverEnabled) {
      this.fetchData(dataSaverEnabled);
    }
  }

  render() {
    const { dataSaverEnabled, imagePath } = this.state;
    return (
      <div className="TweetPage" style={{'margin': '0 auto'}}>
        <Nav 
          checked={dataSaverEnabled}
          onChange={this.toggleDataSaverHandler}/>
        <div className="tweet-stream" style={{'width': '100%'}}>
          {tweets.map((t, i) => (
            dataSaverEnabled ? 
            <Tweet autoPlay={true} data={t} key={i} linkProps={linkProps} imagePath={'assets/images/' + imagePath + '/' + i + '.jpg'} /> :
            <Tweet autoPlay={false} data={t} key={i} linkProps={linkProps} imagePath={'assets/images/' + imagePath + '/' + i + '.jpg'} />
          ))}
        </div>
      </div>
    );
  }
};

export default App;
