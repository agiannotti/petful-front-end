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
            <p>You can begin the adoption process by adding your name to a queue</p>
            <p>While in line, you can see your current position and others who are in the waiting process</p>
            <p>When it's your turn in line, you can select to either adopt a dog, or a cat</p>
          </div>
        </section>
        <section className='main'></section>
      </div>
    );
  }
}

export default LandingPage;
