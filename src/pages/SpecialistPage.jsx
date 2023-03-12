import React, { useContext, useEffect } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useParams } from 'react-router-dom';
import { placeContext } from '../contexts/PlaceContextProvider';

const SpecialistPage = () => {

  const { id } = useParams();
  const { getSpec, spec, profs, profList, specList } = useContext(placeContext);

  useEffect(() => {
    getSpec(id);
    profList();
    specList();
  }, [])

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  console.log(profs[spec.specialization - 1])
  return (
    <div>
      <div className="container">
        <div className="spec-info">
          <div className="spec-name">Имя: {spec.first_name}</div>
          <div className="spec-descr">Фамилия: {spec.last_name}</div>
          <div className="spec-prof">Профессия: {profs[spec.specialization - 1] ? profs[spec.specialization - 1].name : null}</div>
        </div>
        <div className="schedule">
          Запись:
          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small">Время</InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Время"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>10:00</MenuItem>
              <MenuItem value={20}>11:00</MenuItem>
              <MenuItem value={30}>12:00</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default SpecialistPage;