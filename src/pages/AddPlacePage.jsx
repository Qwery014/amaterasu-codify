import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { placeContext } from '../contexts/PlaceContextProvider';

const style = {
  margin: "10px 0"
}

const AddPlacePage = () => {

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
      <div className="container" style={{ display: "flex", flexDirection: "column" }}>
        <TextField id="outlined-basic" label="Название*" variant="outlined" sx={style} value={title} onInput={(e) => setTitle(e.target.value)} />
        <TextField id="outlined-basic" label="Описание*" variant="outlined" sx={style} value={description} onInput={(e) => setDescription(e.target.value)} />
        <TextField id="outlined-basic" label="Адрес*" variant="outlined" sx={style} value={address} onInput={(e) => setAddress(e.target.value)} />
        <TextField id="outlined-basic" label="Телефонный номер*" variant="outlined" sx={style} value={phone} onInput={(e) => setPhone(e.target.value)} />
        <TextField id="outlined-basic" label="Ссылка на сайт" variant="outlined" sx={style} value={URL} onInput={(e) => setURL(e.target.value)} />

        <Button variant="outlined" onClick={handleSubmit}>Отправить</Button>
      </div>
    </div>
  );
};

export default AddPlacePage;