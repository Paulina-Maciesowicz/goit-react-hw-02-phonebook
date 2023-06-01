import React from 'react';
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

// const INITIAL_STATE = {
//   login: '',
//   email: '',
//   password: '',
// };

export class SignUpForm extends React.Component {
  //   state = { ...INITIAL_STATE };
  state = {
    contacts: ['Michael Jackson', 'Elvis Presley', 'Maciek Lazienka'],
    name: '',
  };

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
          />
        </label>

        <button type="submit">Add contact {name}</button>
      </form>
    );
  }
}
