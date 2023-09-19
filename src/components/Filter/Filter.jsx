import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ value, handleChangeFilter }) => {
    return (
        <Label>
            Find contacts by name
            <Input
                type="text"
                name="filter"
                placeholder="Please, enter contact name"
                value={value}
                onChange={handleChangeFilter}>
            </Input>
        </Label>
    );
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChangeFilter: PropTypes.func.isRequired,
};