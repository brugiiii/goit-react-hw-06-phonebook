import { ContactsListEl, ListItem, Button } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);
  const loweredFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(loweredFilter)
  );

  return (
    <ContactsListEl>
      {filteredContacts.map(({ name, id, number }) => (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
        </ListItem>
      ))}
    </ContactsListEl>
  );
};
