import React from 'react';
import './Adopt.css';
import ApiService from '../ApiService';

class Adopt extends React.Component {
  state = {
    cats: [],
    dogs: [],
    people: [],
    name: '',
  };

  componentDidMount() {
    this.setFirstCat();
    this.setFirstDog();
    this.setAllPeople();
  }

  setFirstCat = () => {
    ApiService.getCat()
      .then((res) => {
        this.setState({
          cats: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  setFirstDog = () => {
    ApiService.getDog()
      .then((res) => {
        this.setState({
          dogs: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  setAllPeople = () => {
    ApiService.getPeople()
      .then((res) => {
        this.setState({
          people: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  adoptCat = () => {
    ApiService.adoptCat().then(() => {
      this.setState({
        cats: this.state.cats.splice(1),
        people: this.state.people.splice(1),
      });
    });
  };

  adoptDog = () => {
    ApiService.adoptDog().then(() => {
      this.setState({
        dogs: this.state.dogs.splice(1),
        people: this.state.people.splice(1),
      });
    });
  };

  firstInLine = () => {
    if (this.state.people[0] === this.name) {
      clearInterval(this.adoptInterval);
    }
  };

  handleAddPerson = (e) => {
    e.preventDefault();
    ApiService.addPerson(this.state.name).then(() => {
      this.name = this.state.name;
      this.setState({
        people: [...this.state.people, this.state.name],
        name: '',
      });
      this.adoptInterval = setInterval(() => {
        if (new Date().getTime() % 2 === 0) {
          this.adoptCat();
        } else {
          this.adoptDog();
        }
        ApiService.addPerson('Elvira').then(() => {
          this.setState({
            people: [...this.state.people, 'Elvira'],
          });
        });
      }, 5000);
    });
  };

  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };

  renderPets() {
    return (
      <div>
        <div>
          {this.renderPet(this.state.dogs[0], 'Dog')}

          <button
            className='adopt-button'
            onClick={this.handleDog}
            type='button'
            disabled={this.state.people[0] !== this.name}
          >
            Adopt this Dog!
          </button>
        </div>
        <br />
        <br />
        <div>
          {this.renderPet(this.state.cats[0], 'Cat')}
          <button
            className='adopt-button'
            onClick={this.handleCat}
            type='button'
            disabled={this.state.people[0] !== this.name}
          >
            Adopt this Cat!
          </button>
        </div>
        <br />
        <br />
      </div>
    );
  }

  renderPet(petObj, petType) {
    if (petObj === undefined) {
      return <></>;
    }
    let petName = petObj.name;
    let petPic = petObj.imageURL;
    let petDescription = petObj.description;
    let petGender = petObj.gender;
    let petAge = petObj.age;
    let petBreed = petObj.breed;
    let petStory = petObj.story;

    return (
      <div className='adoption-image'>
        <img className='bg-img' src={petPic} alt={petType}></img>
        <h3>{petName}</h3>
        <p>Description: {petDescription}</p>
        <p>Name: {petName}</p>
        <p>Age: {petAge}</p>
        <p>Gender: {petGender}</p>
        <p>Breed: {petBreed}</p>
        <p>Story: {petStory}</p>
      </div>
    );
  }

  handleDog = (e) => {
    e.preventDefault();
    this.adoptDog();
    alert('New Dog confirmed!');
  };

  handleCat = (e) => {
    e.preventDefault();
    this.adoptCat();
    alert('New Cat confirmed!');
  };

  render() {
    this.firstInLine();
    return (
      <div>
        <div>{this.renderPets()}</div>
        <fieldset className='queue'>
          <h3>Add Name to List: </h3>
          <form onSubmit={this.handleAddPerson}>
            <label htmlFor='fullName'>Name: </label>
            <input
              name='fullName'
              value={this.state.name}
              onChange={this.handleOnChange}
              placeholder='Enter your name'
              required
            ></input>
            <button type='submit'>Add Name</button>
          </form>
          <ul>
            {this.state.people.map((person, i) => {
              return <li key={i}>{person}</li>;
            })}
          </ul>
        </fieldset>
      </div>
    );
  }
}

export default Adopt;
