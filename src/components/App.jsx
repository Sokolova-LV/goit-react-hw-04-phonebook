import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Article } from './App.styled.';

const LS_KEY = 'contacts';

export const App = () => {
  /*const [contacts, setContacts] = useState([]);*/
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('contacts'))
  );

  useEffect(() => {
    window.localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    contacts.find(contact => contact.name.toLowerCase() === name)
      ? alert(`${name} is already in contacts.`)
      : setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = userId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== userId)
    );
  };

  const handleChangeFilter = ({ currentTarget: { value } }) => {
    setFilter(value);
  };

  const getFilterContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <div>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />

      <Article>Contacts</Article>
      <Filter value={filter} handleChangeFilter={handleChangeFilter} />
        
      <ContactList
        contacts={getFilterContacts()}
        deleteContact={deleteContact}
      />
    </div>
  );
};