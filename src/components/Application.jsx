import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../styles/Application.css"
import "../styles/Profile.css"

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function NestedModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleOpen}>
        <AddCircleIcon />
      </IconButton>

      <div className='addOrganization'>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
        >
          <Box sx={{ ...style, width: 700 }}>
            <h2 id="parent-modal-title">Добавить новую организацию</h2>
            <div className='input'>
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="Имя" variant="outlined" />
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="Описания" variant="outlined" />
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="местоположения" variant="outlined" />
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="longtitude" variant="outlined" />
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="latitude" variant="outlined" />
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="website" variant="outlined" />
              <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="phone_number" variant="outlined" />
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
