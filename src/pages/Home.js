import React from "react";
import Navbar from "../components/Navbar"
import img from "../carImg2.jpg"
import HeaderImg from "./HeaderImg"
import Skeleton from "./Skeleton"
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* src\carImg.jpg */}
     {/* <img src={img}></img> */}
     <HeaderImg/>
     <Container maxWidth="sm">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
     <Skeleton/>
      </Container>
     {/* <div className="container">

     </div> */}
    </div>
  );
}

export default App;