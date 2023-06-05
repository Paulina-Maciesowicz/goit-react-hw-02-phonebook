import React from 'react';
const INITIAL_STATE = {
  contacts: [
    'Michael Jackson',
    'Elvis Presley',
    'Maciek Lazienka',
    'SpongeBob Kanciastoporty',
  ],
  name: '',
};
export class Component extends React.Component {
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

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name } = this.state;
    console.log(this.state);
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
      <>
        <h2>Phonebook</h2>
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
      </>
    );
  }
}
