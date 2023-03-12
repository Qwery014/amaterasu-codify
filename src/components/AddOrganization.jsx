import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField } from '@mui/material';
import { placeContext } from '../contexts/PlaceContextProvider';
import AddCircleIcon from '@mui/icons-material/AddCircle';


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

const AddOrganization = () => {

  const { addSpecialisation } = useContext(placeContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function addOrg() {
    const form = new FormData;
    form.append("name", name);
    form.append("descprition", description);

    addSpecialisation(form)

  }

  return (
    <>
      <IconButton onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить профессию
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Название" variant="outlined" value={name} onInput={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="Описание" variant="outlined" value={description} onInput={(e) => setDescription(e.target.value)} />
            <Button onClick={addOrg}>Добавить</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddOrganization;