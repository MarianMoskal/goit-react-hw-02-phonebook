import { Item, Button } from "./index";
import PropTypes from "prop-types";

function Contacts(p) {
  const { contacts, filter, onDelete } = p;
  const emptyFilter = filter.trim() === "";
  const lowCaseFilter = filter.toLowerCase();

  return (
    <>
      {emptyFilter &&
        contacts.map(({ id, name, number }) => (
          <Item key={id}>
            {name}: {number} ...................................
            <Button type="button" id={id} onClick={onDelete} value="Delete" />
          </Item>
        ))}

      {!emptyFilter &&
        makeFilteredContacts(contacts, lowCaseFilter).map(
          ({ id, name, number }) => (
            <Item key={id}>
              {name}: {number}...................................
              <Button type="button" id={id} onClick={onDelete} value="Delete" />
            </Item>
          )
        )}
    </>
  );
}

Contacts.propTypes = {
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};

function makeFilteredContacts(contacts, lowCaseFilter) {
  let filteredContacts = [];
  for (const contact of contacts) {
    if (contact.name.toLowerCase().includes(lowCaseFilter)) {
      filteredContacts.push(contact);
    }
  }
  return filteredContacts;
}

export default Contacts;
