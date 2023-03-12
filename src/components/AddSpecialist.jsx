import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, TextField } from '@mui/material';
import { placeContext } from '../contexts/PlaceContextProvider';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useParams } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



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

const AddSpecialist = () => {
  const { addSpecialist, usersList, users, profList, profs } = useContext(placeContext);
  const { id } = useParams();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [room, setRoom] = useState("");
  const [description, setDescription] = useState("");
  const [specialization, setSpecialization] = useState(0);
  const [userId, setUserId] = useState(0);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [prof, setProf] = React.useState('');
  const [user, setUser] = React.useState('');

  const handleChangeProf = (event) => {
    setProf(event.target.value);
    setSpecialization(event.target.value);
  };
  const handleChangeUser = (event) => {
    setUser(event.target.value);
    setUserId(event.target.value);
  };


  useEffect(() => {
    usersList();
    profList()
  }, [])

  function addSpec() {
    const form = new FormData;
    form.append("first_name", name);
    form.append("last_name", lastName);
    form.append("room_number", room);
    form.append("information", description);
    form.append("organization", id);
    form.append("user", userId);
    form.append("specialization", specialization);

    addSpecialist(form)

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
            Добавить специалиста
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Имя" variant="outlined" value={name} onInput={(e) => setName(e.target.value)} />
            <TextField id="outlined-basic" label="Фамилия" variant="outlined" value={lastName} onInput={(e) => setLastName(e.target.value)} />
            <TextField id="outlined-basic" label="Номер кабинета" variant="outlined" value={room} onInput={(e) => setRoom(e.target.value)} />
            <TextField id="outlined-basic" label="Описание" variant="outlined" value={description} onInput={(e) => setDescription(e.target.value)} />
            {/* <TextField id="outlined-basic" label="Профессия" variant="outlined" value={specialization} onInput={(e) => setSpecialization(e.target.value)} /> */}
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Профессия</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={prof}
                label="Профессия"
                onChange={handleChangeProf}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  profs?.map(item => (<MenuItem value={item.id} key={item.id}>
                    {item.name}
                  </MenuItem>))
                }
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small">Сотрудник</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={user}
                label="Сотрудник"
                onChange={handleChangeUser}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  users?.map(item => (<MenuItem value={item.id} key={item.id}>
                    {item.email}
                  </MenuItem>))
                }
              </Select>
            </FormControl>
            <Button onClick={addSpec}>Добавить</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default AddSpecialist;