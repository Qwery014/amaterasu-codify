import React from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PlaceCardItem = ({ place }) => {

  const navigate = useNavigate();


  return (
    <div>
      <Card sx={{ width: 345 }}>
        <CardActionArea onClick={() => navigate(`/place/${place.id}`)}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {place.name}
            </Typography>
            <Typography variant="p" color="text.secondary">
              {place.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default PlaceCardItem;