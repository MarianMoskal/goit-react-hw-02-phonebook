import Contacts from "../Contacts";
import PropTypes from "prop-types";

function ContactList(p) {
  const { contacts, filter, onDelete } = p;

  return (
    <>
      <ol>
        <Contacts onDelete={onDelete} contacts={contacts} filter={filter} />
      </ol>
    </>
  );
}

ContactList.propTypes = {
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  contacts: PropTypes.array,
};

export default ContactList;
