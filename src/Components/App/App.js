import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch, Link } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Adopt from '../Adopt/Adopt';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className='nav'>
              <Link className='title' to='/'>
                Petful
              </Link>
            </nav>

            <main>
              <Switch>
                <Route exact path='/' component={LandingPage} />
                <Route path='/adoption' component={Adopt} />
              </Switch>
              <Link to='/adoption'>
                <button>Adopt a pet!</button>
              </Link>
            </main>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
