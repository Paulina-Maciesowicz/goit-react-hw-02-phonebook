import React from 'react';
import { nanoid } from 'nanoid';

export class SignUpForm extends React.Component {
  state = {
    contacts: [
      'Michael Jackson',
      'Elvis Presley',
      'Maciek Lazienka',
      'SpongeBob Kanciastoporty',
    ],
    name: '',
  };

  static defaultProps = {
    contacts: [],
  };

  static propTypes = {
    contacts: Array,

    //     SignUpForm.propTypes = {
    //   contacts: PropTypes.arrayOf(
    //     PropTypes.shape({
    //       name: PropTypes.Array
    //     })
    //   ),
    // };
  };

  name = this.props.contacts;

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = this.state;
    const newContact = name;
    console.log(this.state);
    console.log(`Name: ${name}`);

    this.setState({ contacts: [...this.state.contacts, newContact] });
  };
  reset = () => {
    this.setState({
      contacts: ['Michael Jackson', 'Elvis Presley', 'Maciek Lazienka'],
      name: '',
    });
  };

  render() {
    const nameInputId = nanoid();
    const { name } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label id={nameInputId}>
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
