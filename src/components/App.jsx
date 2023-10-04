import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Title, Article } from './App.styled.';

const LS_KEY = 'contacts';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(() =>
      JSON.parse(window.localStorage.getItem(LS_KEY)) ?? []
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

    contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
        newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? alert(`${newContact.name}: is already in contacts`)
      : setContacts([newContact, ...contacts]);
  };

  const deleteContact = userId => {
    setContacts(contacts.filter(contact => contact.userId !== userId));
  };

  const handleChangeFilter = e => {
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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