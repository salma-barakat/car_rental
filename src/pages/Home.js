import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import img from "../carImg2.jpg"
import HeaderImg from "./HeaderImg"
import Skeleton from "./Skeleton"
import Container from '@mui/material/Container';
import Grid from "../components/Grid";
function App() {
  return (
    <>
    {/* // <div className="App"> */}
      <Navbar />
      {/* src\carImg.jpg */}
      {/* <img src={img}></img> */}
      <HeaderImg />
      <Container>
        <h1>Some of our cars</h1>
        <Grid />
      </Container>
      {/* <Container> */}
        <Footer />
      {/* </Container> */}
      
    {/* </div> */}
    </>
  );
}

export default App;