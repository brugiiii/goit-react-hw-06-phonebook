import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
// Components
import { ContactsList } from './ContactsList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
// styles
import { ContactsBook, PhonebookTitle, ContactsTitle } from './App.styled';

const LOCAL_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem(LOCAL_KEY)) ?? []
  );

  useEffect(() => {
    const contacts = JSON.parse(window.localStorage.getItem(LOCAL_KEY));

    if (contacts) {
      setContacts(contacts);
    }
  }, []);

  useEffect(
    () => window.localStorage.setItem(LOCAL_KEY, JSON.stringify(contacts)),
    [contacts]
  );

  const addContact = ({ name, number }) => {
    const loweredName = name.toLowerCase();

    contacts.find(contact => contact.name.toLowerCase() === loweredName)
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const deleteContact = id =>
    setContacts(contacts => contacts.filter(contact => contact.id !== id));

  const loweredFilter = filter.toLocaleLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(loweredFilter)
  );

  return (
    <ContactsBook>
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm onSubmit={addContact} />

      <ContactsTitle>Contacts</ContactsTitle>
      <Filter onChange={changeFilter} value={filter} />
      <ContactsList contacts={filteredContacts} onClick={deleteContact} />
    </ContactsBook>
  );
};
