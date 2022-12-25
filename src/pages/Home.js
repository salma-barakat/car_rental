import React, { useState } from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import HeaderImg from "./HeaderImg"
import Container from '@mui/material/Container';
import Grid from "../components/Grid";
import axios from "axios";
import {useEffect } from "react";
import {url} from '../conf';

function App() {
  const [data,setData]=useState([]);
  useEffect(() => {
    axios({
      method: 'GET',
      url: url+'api/',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response.data)
      setData(response.data)
      
    })
    .catch((error) => {
      console.log(error)
    })
  },[]);
  
  return (
    <>
    {/* // <div className="App"> */}
      <Navbar />
      {/* src\carImg.jpg */}
      {/* <img src={img}></img> */}
      <HeaderImg />
      <Container>
        <h1>Some of our cars</h1>
        <Grid data={data}/>
      </Container>
      {/* <Container> */}
        <Footer />
      {/* </Container> */}
      
    {/* </div> */}
    </>
  );
}

export default App;