import React, { useContext, useState } from 'react';
import userProfile from "../assets/images/user.jpg"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { IconButton, TextField } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import "../styles/Application.css"
import "../styles/Profile.css";
import Application from "./Application"
import { placeContext } from '../contexts/PlaceContextProvider';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: "100%",
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

    const { addOrganization } = useContext(placeContext)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [URL, setURL] = useState("");

    function handleSubmit() {
        let organization = new FormData;

        organization.append("name", title);
        organization.append("description", description);
        organization.append("address", address);
        organization.append("website", URL);
        organization.append("latitude", 0);
        organization.append("longtitude", 0);
        organization.append("phone_number", phone);

        addOrganization(organization)
    }

    return (
        <div>
            <div className='info'>
                <img src={userProfile} alt="" className="userProfile" />
                <div className='email'>
                    {
                        localStorage.getItem('email')
                    }
                </div>
                <div className='addOrganization'>
                    <IconButton onClick={handleOpen}>
                        <AddCircleIcon />
                    </IconButton>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="parent-modal-title"
                        aria-describedby="parent-modal-description"
                    >
                        <Box sx={{ ...style, width: 400 }}>
                            <h2 id="parent-modal-title">Добавить новую организацию</h2>
                            <div className="container" style={{ display: "flex", flexDirection: "column" }}>
                                {/* <TextField id="outlined-basic" label="Название*" variant="outlined" sx={style} value={title} onInput={(e) => setTitle(e.target.value)} />
                                <TextField id="outlined-basic" label="Описание*" variant="outlined" sx={style} value={description} onInput={(e) => setDescription(e.target.value)} />
                                <TextField id="outlined-basic" label="Адрес*" variant="outlined" sx={style} value={address} onInput={(e) => setAddress(e.target.value)} />
                                <TextField id="outlined-basic" label="Телефонный номер*" variant="outlined" sx={style} value={phone} onInput={(e) => setPhone(e.target.value)} />
                                <TextField id="outlined-basic" label="Ссылка на сайт" variant="outlined" sx={style} value={URL} onInput={(e) => setURL(e.target.value)} /> */}

                                <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="Имя" variant="outlined" value={title} onInput={(e) => setTitle(e.target.value)} />
                                <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="Описания" variant="outlined" value={description} onInput={(e) => setDescription(e.target.value)} />
                                <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="Адрес" variant="outlined" value={address} onInput={(e) => setAddress(e.target.value)} />
                                <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="website" variant="outlined" value={URL} onInput={(e) => setURL(e.target.value)} />
                                <TextField id="outlined-basic" style={{ margin: 5, width: 300 }} label="phone_number" variant="outlined" value={phone} onInput={(e) => setPhone(e.target.value)} />
                                <Button variant="outlined" onClick={handleSubmit}>Отправить</Button>
                            </div>
                        </Box>
                    </Modal>
                </div>
                {/* <Application /> */}
            </div>
        </div>
    );
};

export default Profile;