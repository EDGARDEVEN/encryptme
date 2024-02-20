import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import './App.css';
import { Switch } from 'react-router-dom';
import EncryptionPage from './components/EncryptionPage';

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

