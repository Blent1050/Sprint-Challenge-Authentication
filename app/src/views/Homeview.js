import React, { Component } from 'react';
import axios from 'axios';

//HOC validating token before showing page.
import requiresAuth from '../auth/requiresAuth';

class Homeview extends Component {
  state = {
    jokes: [],
  };

  render() {
    return this.displayUsers();
  }

  componentDidMount() {
    this.getUsers();
  }

  displayUsers = () => {
    return (
      <>
        <button onClick={this.logout}>Logout</button>
        {this.state.jokes &&
          this.state.jokes.map(joke => {
            return <p key={joke.id}>{joke.joke}</p>;
          })}
      </>
    );
  };

  getUsers = () => {
    axios
      .get('/api/jokes')
      .then(res => {
        console.log(res.data);
        this.setState({ jokes: res.data });
      })
      .catch(err => console.log(err));
  };
  logout = () => {
    localStorage.removeItem('jwt');

    this.props.history.push('/login');
  };
}

export default requiresAuth(Homeview);
