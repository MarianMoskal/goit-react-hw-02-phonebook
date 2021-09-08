import Contacts from "../Contacts";

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

export default ContactList;
