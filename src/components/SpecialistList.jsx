import { IconButton, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import SpecialistItem from './SpecialistItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { placeContext } from '../contexts/PlaceContextProvider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddOrganization from './AddOrganization';
import AddSpecialist from './AddSpecialist';
import "../styles/spec.css"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const SpecialistList = () => {
  const { specList, specs = 0 } = useContext(placeContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    specList();
  }, [])

  return (
    <div>
      <div className="add-specialization">
        <AddOrganization />
      </div>
      <div className="add-specialist">
        <AddSpecialist />
      </div>
      <div className="spec-list">
        {
          specs?.map(item => <SpecialistItem item={item} key={item.id} />)
        }
      </div>

    </div>
  );
};

export default SpecialistList;