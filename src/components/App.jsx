import React from 'react';
import { Form } from './Input/Input';

export class Component extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  //   constructor(props) {
  //     super(props);
  //     this.contacts = this.contacts.bind(this);
  //     this.name = this.name.bind(this);
  //   }
  // }

  state = {
    contacts: [],
    name: '',
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
      <Form />
    </div>
  );
};
