import { Component } from "react";
import { Label, Input, Submit, FormS } from "./index";
import PropTypes from "prop-types";

class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  render() {
    const { onSubmit, onChange } = this.props;

    return (
      <FormS onSubmit={onSubmit}>
        <Label htmlFor="inputName">Name</Label>
        <Input
          onChange={onChange}
          type="text"
          name="name"
          placeholder="Enter your name"
          id="inputName"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
        <Label htmlFor="inputName">Number</Label>
        <Input
          onChange={onChange}
          type="tel"
          name="number"
          id="inputNumber"
          placeholder="Enter your number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
        <Submit type="submit" value="Add contact" />
      </FormS>
    );
  }
}

Form.propTypes = {
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
