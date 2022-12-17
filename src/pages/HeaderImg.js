import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HeaderImgLayout from './HeaderImgLayout';
import img from "../carImg2.jpg"
const backgroundImage =img
//   'src/carImg2.jpg';

export default function HeaderImg() {
  return (
    <HeaderImgLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'justify',
      }}
    >
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
      />
      <Typography color="inherit" align="justify" variant="h2" >
        Rent Your Favourite Car
      </Typography>
     
      <Button
        variant="contained"
        size="large"
        href="/sign-up"
        sx={{ minWidth: 200 }}
      >
        Sign-UP
      </Button>
     
    </HeaderImgLayout>
  );
}