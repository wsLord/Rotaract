import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/homepage';
import Post from './components/post'
import Payment from './components/payment'

function App() {
  return (
    <div>
      <Router>
        <switch>
          <Route path="/" exact component={Home} />
          <Route path="/gallery" component={Post} />
          <Route path="/donate" component={Payment} />
        </switch>
      </Router>

    </div>
  );
}

export default App;
