import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SpecialistItem = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={() => navigate("/spec/id")}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SpecialistItem;