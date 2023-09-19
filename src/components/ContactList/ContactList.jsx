import PropTypes from 'prop-types';
import { ContactElement } from 'components/ContactElement/ContactElement';
import { List } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
    console.log(contacts);
    return (
        <List>
            {contacts.map(({ name, number, id }) => (
                <ContactElement
                    key={id}
                    id={id}
                    name={name}
                    number={number}
                    deleteContact={deleteContact}
                />
            ))}
        </List>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ),
    deleteContact: PropTypes.func,
};





