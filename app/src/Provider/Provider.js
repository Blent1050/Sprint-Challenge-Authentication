import React, { Component } from 'react';

//Axios setup
import axios from 'axios';
axios.defaults.withCredentials = true;

//Creates a react context
const Context = React.createContext();

//Provider is like the 'store' for your data.
class Provider extends Component {
  state = {
    userInfo: [],
    users: [],
    isLoggedIn: false,
    isNewUser: false,
  };

  render() {
    return (
      <>
        <Context.Provider
          value={{
            state: this.state,
            registerUser: this.registerUser,
            loginUser: this.loginUser,
            newUser: this.newUser,
          }}
        >
          {this.props.children}
        </Context.Provider>
      </>
    );
  }

  //API CALLS CAN GO HERE -- DELETE IF NEEDED
  registerUser = (e, user) => {
    e.preventDefault();
    axios
      .post(`/api/register`, user)
      .then(res => {})
      .catch(err => console.log(err));
  };

  loginUser = (e, user) => {
    e.preventDefault();
    axios
      .post(`/api/login`, user)
      .then(res => {
        localStorage.setItem('jwt', res.data.token);
        this.setState({ userInfo: res.data, isLoggedIn: true });
        //checks if theres children to prevent crash
        if (this.props.children) {
          this.props.children[0]._self.props.history.push('/home');
        }
      })
      .catch(err => console.log(err));
  };

  newUser = e => {
    this.setState({ isNewUser: !this.state.isNewUser });
  };
}

export { Provider, Context };
