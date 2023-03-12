import React, { useContext, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { placeContext } from '../contexts/PlaceContextProvider';

const SpecialistItem = ({ item }) => {
  const { profList, profs, specList } = useContext(placeContext)
  useEffect(() => {
    profList();
    specList()
  }, [])
  const navigate = useNavigate();
  console.log(profs[item.specialization - 1].name)

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate(`/spec/${item.id}`)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.first_name}  {item.last_name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {profs[item.specialization - 1].name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.information}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SpecialistItem;