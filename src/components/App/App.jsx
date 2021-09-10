import { Component } from "react";
import Form from "../Form";
import Filter from "../Filter";
import ContactList from "../ContactList";
import { v4 as uuidv4 } from "uuid";
import { Container, Title, SecondaryTitle } from "./index";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleInputValue = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  deleteHandler = (e) => {
    this.setState((state) => ({
      contacts: state.contacts.filter((el) => el.id !== e.target.id),
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { contacts, name, number } = this.state;
    const { inputName, inputNumber } = e.target;
    const foundEl = contacts.find(
      (el) => el.name.toLowerCase() === name.toLowerCase()
    );

    if (foundEl) {
      alert(`${name} is already in your contacts!`);
      inputName.value = "";
      inputNumber.value = "";
    } else {
      const contact = { name, number, id: uuidv4() };
      this.setState({ contacts: contacts.concat(contact) });
      inputName.value = "";
      inputNumber.value = "";
    }
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <>
        <Container>
          <Title>Phonebook</Title>
          <Form onChange={this.handleInputValue} onSubmit={this.handleSubmit} />
        </Container>
        {contacts.length > 0 && (
          <Container>
            <SecondaryTitle>Contacts</SecondaryTitle>
            <Filter onChange={this.handleInputValue} />
            <ContactList
              onDelete={this.deleteHandler}
              contacts={contacts}
              filter={filter}
            />
          </Container>
        )}
      </>
    );
  }
}

export default App;
