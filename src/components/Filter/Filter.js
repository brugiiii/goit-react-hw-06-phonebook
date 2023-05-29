import PropTypes from 'prop-types';
import { Label, Input } from './Filter.styled';

export const Filter = ({ onChange, value }) => {
  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={onChange} value={value} />
    </Label>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
