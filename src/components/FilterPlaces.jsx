import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import "../styles/Filter.css"

import { useNavigate } from 'react-router-dom';

const FilterPlaces = () => {
  const navigate = useNavigate();

  const [age, setAge] = React.useState('');

  const handleChange = (SelectChangeEvent) => {
    setAge(SelectChangeEvent.target.value);
  };

  return (
    <div className='filter'>
      <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Медицинские учреждения</MenuItem>
          <MenuItem value={21}>Визовые центры</MenuItem>
          <MenuItem value={22}>Нотариальные и адвокатские конторы</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterPlaces;