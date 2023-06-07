import React from 'react';
import { nanoid } from 'nanoid';

export class SignUpForm extends React.Component {
  state = {
    contacts: [{ name: 'Paula Magnolia', number: '345678654' }],
    name: '',
    number: '',
    filter: '',
  };

  static defaultProps = {
    contacts: [],
  };

  // static propTypes = {
  //   contacts: Array,

  //   //     SignUpForm.propTypes = {
  //   //   contacts: PropTypes.arrayOf(
  //   //     PropTypes.shape({
  //   //       name: PropTypes.Array
  //   //     })
  //   //   ),
  //   // };
  // };

  name = this.props.contacts;

  handleChange = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    if (
      this.state.contacts.find(
        elemContact => elemContact.name === this.state.name
      )
    ) {
      alert('is already in contacts');
      return;
    }
    // const { name } = this.state;
    const newContact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(),
    };
    console.log(newContact);
    console.log(this.state);
    // console.log(`Name: ${name}`);

    this.setState({ contacts: [...this.state.contacts, newContact] });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(name => name.id !== id),
    }));
  };

  reset = () => {
    this.setState({
      contacts: ['Michael Jackson', 'Elvis Presley'],
      name: '',
      number: '',
      filter: '',
    });
  };

  render() {
    const { name } = this.state;
    const { number } = this.state;
    const { filter } = this.state;

    return (
      <>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Add contact {name}</button>
        </form>
        <h2>Contacts</h2>
        <label>
          Find contacts by name
          <input
            type="text"
            name="filter"
            pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={filter}
            onChange={this.handleChange}
          />
        </label>
        <ul>
          {this.state.contacts
            .filter(contact =>
              contact.name
                .toLowerCase()
                .includes(this.state.filter.toLowerCase())
            )
            .map(contact => (
              <li key={`${nanoid()}`}>
                {contact.name} {''}
                {contact.number}
                <button type="click" onClick={this.handleDelete(contact.id)}>
                  delete
                </button>
              </li>
            ))}{' '}
        </ul>
      </>
    );
  }
}
