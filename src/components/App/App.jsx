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
    const { contacts } = this.state;
    const idx = contacts.indexOf(contacts.find((el) => el.id === e.target.id));
    contacts.splice(idx, 1);
    this.setState({ contacts });
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
      contacts.push(contact);
      this.setState({ contacts });
      inputName.value = "";
      inputNumber.value = "";
    }
  };

  render() {
    const { handleSubmit, handleInputValue, deleteHandler, state } = this;

    return (
      <>
        <Container>
          <Title>Phonebook</Title>
          <Form onChange={handleInputValue} onSubmit={handleSubmit} />
        </Container>
        {state.contacts.length > 0 && (
          <Container>
            <SecondaryTitle>Contacts</SecondaryTitle>
            <Filter onChange={handleInputValue} />
            <ContactList
              onDelete={deleteHandler}
              contacts={state.contacts}
              filter={state.filter}
            />
          </Container>
        )}
      </>
    );
  }
}

export default App;
