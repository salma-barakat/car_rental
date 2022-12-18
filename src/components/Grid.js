import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from "./Card" 
import data from "../pages/Data"
import { useNavigate } from "react-router-dom"; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor:"pointer"
}));

export default function ResponsiveGrid() {
    const history = useNavigate();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
      data.map((item, index) => (
          <Grid xs={2} sm={4} md={3} key={index}>
            <Item  onClick={e=>history("/car/:"+item.id)} >
            <Card img={item.src} title={item.title} description={item.description} price={item.price} status={item.status}/>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}