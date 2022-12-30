import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from 'react';
import {url} from '../conf';
import Header from "../pages/Header";
import img from "../adminImg.jpg"
import BorderColorSharpIcon from '@mui/icons-material/BorderColorSharp';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



// import { useNavigate } from "react-router-dom"; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const backgroundImage = img

const theme = createTheme();

export default function AdminPage() {
  const handleClose = () => { setOpenModal(false); if(redirect.stat) history("/user/"+redirect.msg) }
  const [inputs, setInputs] = useState([]);
  const [redirect, setRedirect] = useState({stat:false,msg:''});
  const [openModal,setOpenModal] = React.useState(false);

console.log(inputs)
  const history = useNavigate();
    const myStyle={
    backgroundImage: `url(${backgroundImage})`,
    height:'110vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    }
    return (
    <>
    {/* // <div className="App"> */}
    <Header />
    <div style={myStyle}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              <h1>
              Welcome Admin</h1>
            </Typography>
          </Box>
          <div style={{alignItems: 'justify'}}>
          <Stack direction="column" spacing={3}>
          <Button
            variant="contained"
            size="large"
            onClick={e=>history(window.location.pathname + '/addcar')}
            //href="/AddCar"
            //sx={{ minWidth: 50 }}
          >
            Add a new car
          </Button>
          <Button
            variant="contained"
            size="large"
            onClick={e=>history(window.location.pathname + '/editCar')}
            //href="/viewAndEdit"
           // sx={{ minWidth: 250 }}
          >
            View or edit a car
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={e=>history(window.location.pathname + '/reports')}
            //href="/Reports"
           // sx={{ minWidth: 200 }}
          >
            View Reports
          </Button>

          <Button
            variant="contained"
            size="large"
            onClick={e=>history(window.location.pathname + '/search')}
            //href="/Reports"
           // sx={{ minWidth: 200 }}
          >
            Search
          </Button>

        </Stack>
        </div>

        </Container>
      </ThemeProvider>
      </div>
      {/* </div> */}
    </>
    );
  }