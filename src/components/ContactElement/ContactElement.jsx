import PropTypes from 'prop-types';
import { Item, ItemName, ItemNumber, Btn } from './ContactElement.styled';

export const ContactElement = ({ id, name, number, deleteContact }) => {
    return (
        <Item>
            <ItemName>
                {name}<ItemNumber>{number}</ItemNumber>
            </ItemName>
            <Btn onClick={() => deleteContact(id)}>Delete</Btn>
        </Item>
    );
};

ContactElement.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    deleteContact: PropTypes.func.isRequired,
};