import * as React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from "./Card" 
// import data from "../pages/Data"
import { useNavigate } from "react-router-dom"; 
import {getCar} from "../servies"
// import {useState,useEffect} from "react";
import { useState ,useEffect} from 'react';
import axios from 'axios';
// const [users, setUsers] = useState([]);
//     
    // function getUsers() {
    //     axios.get('http://localhost:8888/api/users/').then(function(response) {
    //         console.log(response.data);
    //         setUsers(response.data);
    //     });
    // }
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  cursor:"pointer"
}));

export default  function ResponsiveGrid({data}) {
  console.log(data)
  const [car , setcar]= useState([]);


  useEffect(() => {
      setcar(data);
  },[data]);

const history = useNavigate();

// console.log(window.location.pathname)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 1 }} columns={{ xs: 4, sm: 8, md: 12 }}>
      {
      car!=[]&& car.map((item, index) => (
          <Grid xs={2} sm={4} md={3} key={index}>
            <Item  onClick={e=>history((window.location.pathname!='/'?window.location.pathname:'')+"/car/"+item.plate_id)} >
            <Card img={item.img} model={item.model} title={item.make} description={item.description} price={item.price} status={item.country} year={item.year}/>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
