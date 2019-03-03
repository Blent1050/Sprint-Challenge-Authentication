import React from 'react';

//State Management
import { Context } from '../Provider/Provider';

//Components
import RegisterForm from '../components/RegisterForm';
import LoginForm from '../components/LoginForm';

function Formview() {
  return (
    <Context.Consumer>
      {context => {
        return context.state.isNewUser ? <RegisterForm /> : <LoginForm />;
      }}
    </Context.Consumer>
  );
}

export default Formview;
