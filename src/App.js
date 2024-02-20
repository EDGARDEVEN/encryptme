import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import EncryptionPage from './EncryptionPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/encrypt" component={EncryptionPage} />
          {/* Add more routes for other pages if needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

