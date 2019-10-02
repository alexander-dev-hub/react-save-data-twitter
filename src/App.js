
import React from 'react';

import Tweet from './components/Tweet/Tweet';
import tweets from './assets/data/tweets';
import './App.css';

const linkProps = { target: '_blank' };

const App = () => {
  return (
    <div className="TweetPage" style={{'width': '590px', 'margin': '0 auto'}}>
      <div className="tweet-stream" style={{'width': '100%'}}>
        {tweets.map((t, i) => (
          <Tweet autoPlay={true} data={t} key={i} linkProps={linkProps} />
        ))}
      </div>
    </div>
  );
};

export default App;
