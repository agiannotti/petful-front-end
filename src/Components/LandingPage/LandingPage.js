import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <div className='landing'>
            <h1>Find your future furry companion!</h1>
            <p>
              Petful was designed to streamline the adoption process and help
              you find the right pet quickly and efficiently.
            </p>
            <p></p>
          </div>
        </section>
        <section className='main'></section>
      </div>
    );
  }
}

export default LandingPage;
