import React from 'react';
import userProfile from "../assets/images/user.jpg"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import "../styles/Application.css"
import "../styles/Profile.css"
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    bgcolor: 'background.paper',
    // border: '1px solid #000',
    borderRadius: 3, 
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

const Profile = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className='info'>
                <img src={userProfile} alt="" className="userProfile" onClick={handleOpen} />
                <div className='email'>
                    {
                        localStorage.getItem('email')
                    }
                </div>
                <div className='addOrganization'>

                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <h2 id="parent-modal-title">Добавить новую организацию</h2>
                            <div className='input'>
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="Имя" variant="outlined" />
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="Описания" variant="outlined" />
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="местоположения" variant="outlined" />
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="longtitude" variant="outlined" />
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="latitude" variant="outlined" />
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="website" variant="outlined" />
                                <TextField id="outlined-basic" style={{ margin: 15, width: 300}} label="phone_number" variant="outlined" />

                            </div>


                        </Box>
                    </Modal>
                </div>
            </div>
        </div>
    );
};

export default Profile;