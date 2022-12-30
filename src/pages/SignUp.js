
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../imgSign.jpg"
import { useNavigate } from "react-router-dom"; 
import axios from 'axios';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from 'react';
import {url} from '../conf';
import Navbar from "../components/Navbar"


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

export default function SignUp() {
  const handleClose = () => { setOpenModal(false); if(redirect.stat) history("/user/"+redirect.msg) }
  const [inputs, setInputs] = useState([]);
  const [redirect, setRedirect] = useState({stat:false,msg:''});
  const [openModal,setOpenModal] = React.useState(false);
  const [modalMsg,setModalMsg] = React.useState('');
  

  const handleSubmit=async(event)=>{
   
    event.preventDefault();
    const headers={'Access-control-Allow-Origin':'*'}
    const formData={
      ...inputs
    }
    if(!inputs.firstName || !inputs.lastName ||! inputs.email || !inputs.password|| !inputs.phoneNo || !inputs.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      setOpenModal(true);
      setModalMsg({title:'Error' , msg:'Enter all required data.'});
      if (!inputs.email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        setOpenModal(true);
        setModalMsg({title:'Error' , msg:'Enter correct email.'}); 
      }
    }  else{
    await axios.post(url+'api/user.php/New',formData,{headers})
    .then(res=>{
      if(res.data.status==0){
      setOpenModal(true);
      setModalMsg({title:'Error' , msg:'user registered before'});
      }else if(res.data.status==1){
        setOpenModal(true);
      setModalMsg({title:'Congrats',msg:'Registered successfully'});
      setRedirect({stat:true,msg:res.data.message});
      
      console.log(res.data)
    }
  }
   )
    .catch(function(error){
      console.log(error)
    });
  }
}



console.log(inputs)
  const history = useNavigate();
    const myStyle={
    backgroundImage: `url(${backgroundImage})`,
    height:'120vh',
    marginTop:'-70px',
    fontSize:'50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    }
    return (
      <>
      <Navbar />
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
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                    onChange={e=>{setInputs({ ...inputs, firstName: e.target.value })}} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                    onChange={e=>{setInputs({ ...inputs, lastName: e.target.value })}} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={e=>{setInputs({ ...inputs, email: e.target.value })}} v
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={e=>{setInputs({ ...inputs, password: e.target.value })}} 
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNo"
                    label="Phone Number"
                    name="phoneNo"
                    autoComplete="phoneNo"
                    onChange={e=>{setInputs({ ...inputs, phoneNo: e.target.value })}} 
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit} 
              >
                Sign Up
              </Button>
              <Grid container>
                <Grid item  >
                  <Link href="/Log-In" variant="body2" >
                  <span style={{fontWeight: 'bold', fontSize: '20'}}>Already have an account? Sign in</span>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
        {openModal&&<Modal
                  open={openModal}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                    {modalMsg.title}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {modalMsg.msg}
                    </Typography>
                  </Box>
                </Modal>
}
      </ThemeProvider>
      </div>
      </>
    );
  }
  