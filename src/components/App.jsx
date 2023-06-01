import React from 'react';
import { SignUpForm } from './Input/Input';

export class Component extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  //   constructor(props) {
  //     super(props);
  //     this.contacts = this.contacts.bind(this);
  //     this.name = this.name.bind(this);
  //   }
  // }

  state = {
    contacts: ['Michael Jackson', 'Elvis Presley', 'Maciek Lazienka'],
    name: '',
  };

  render() {
    return (
      <>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(contact => (
            <li>{contact}</li>
          ))}{' '}
        </ul>
      </>
    );
  }
}

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <SignUpForm />
      <Component />
    </div>
  );
};
