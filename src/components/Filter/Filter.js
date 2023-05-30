import { Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => dispatch(changeFilter(e.target.value));

  return (
    <Label>
      Find contacts by name
      <Input type="text" name="filter" onChange={handleChange} value={filter} />
    </Label>
  );
};
