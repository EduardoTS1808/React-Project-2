import  React from 'react';
import {  Card, CardMedia, Box,Button,  Typography, IconButton} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AiFillStar } from "react-icons/ai";

export default function BoxSx(props) {
  return (

            <Card
        variant="outlined"
        sx={{
            p: 2,
            maxWidth: 300 ,
            zIndex: 1,
            margin:'15px',
            padding:'10px',
            boxShadow:'2px 2px 4px rgba(0,0,0,.1)',
            borderRadius: '10px'
        }}
        >
            <Button onClick={props.addCarrim}>
              <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
              </IconButton>
            </Button>
        <CardMedia
            component="img"
            width="300px"
            height="400px"
            alt="image-comida"
            image={props.cardImage}
            sx={{
            width:'100',  height: '250px', padding: '10px', objectFit: 'cover', 
            }}
        />
        <Box sx={{ alignSelf: 'center', ml: 3  }}>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
            <Typography variant="body1" color="primary-text" fontWeight="regular">
            {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary" fontWeight="regular">
            {props.content}
            </Typography>
            <Typography fontWeight="bold" noWrap gutterBottom>
          R$ {props.preco},00 
            </Typography>
           
             <button className="secondary-button">Pedir</button>
      
        </Box>
        </Card>


  );
}
