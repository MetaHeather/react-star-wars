import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { getAllStarships } from './services/sw-api';
import Starship from './Components/Starship/Starship';
import Header from './Components/Header/Header';
import Details from './Pages/Details'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  state = {
    starships: []
  };

  getStarship = (idx) => {
    return this.state.starships[idx];
  }

  async componentDidMount() {
    const starships = await getAllStarships();
    this.setState({ starships: starships.results });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={() => 
            <Starship 
              starships={this.state.starships}
            />
          }/>
          <Route path='/starships/:idx' render={(props) => 
            <Details
              {...props}
              getStarship={this.getStarship}
            />
          }/>
        </Switch>
      </div>
    );
  }

}

export default App;
