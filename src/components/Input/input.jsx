import React from 'react';
const INITIAL_STATE = {
  contacts: ['Michael Jackson', 'Elvis Presley', 'Maciek Lazienka'],
  name: '',
};
// import PropTypes from 'prop-types';
// import css from './input.css';

// export const Form = item => {
//   return (
//     <>
//       <h2>Phonebook</h2>
//       <h4>Name</h4>
//       <input
//         type="text"
//         name="name"
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//         required
//       />
//       <button>Add contact</button>
//     </>
//   );
// };
export class Component extends React.Component {
  // eslint-disable-next-line no-useless-constructor

  //   constructor(props) {
  //     super(props);
  //     this.contacts = this.contacts.bind(this);
  //     this.name = this.name.bind(this);
  //   }
  // }

  state = { ...INITIAL_STATE };

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

export class SignUpForm extends React.Component {
  state = { ...INITIAL_STATE };

  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: Array,
  };

  name = this.props.contacts;
  //   state = {
  //     contacts: ['Michael Jackson', 'Elvis Presley', 'Maciek Lazienka'],
  //     name: '',
  //   };

  // Dla wszystkich elementów wykorzystamy jedną funkcję obsługującą zmianę stanu ('handler').
  // Inputy będziemy rozróżniać za pomocą atrybutu `name`
  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = this.state;

    console.log(`Name: ${name}`);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({
      contacts: ['Michael Jackson', 'Elvis Presley', 'Maciek Lazienka'],
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={this.handleChange}
          />
        </label>

        <button type="submit">Add contact {name}</button>
      </form>
    );
  }
}
