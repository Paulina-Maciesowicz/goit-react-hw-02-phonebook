import React from 'react';
import { Form } from './Input/Input';

export class Component extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  state = {
    contacts: [],
    name: '',
  };

  constructor(props) {
    super(props);
    this.good = this.good.bind(this);
    this.neutral = this.neutral.bind(this);
    this.bad = this.bad.bind(this);
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
