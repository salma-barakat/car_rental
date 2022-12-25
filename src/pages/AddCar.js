
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../collectionCars.jpg"
import { redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
import Modal from '@mui/material/Modal';
// import { useNavigate } from "react-router-dom"; 
import {url} from '../conf';
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

export default function LogIn() {
  const history = useNavigate();
  // const handleSubmit = (event) => {



  //   // const data = new FormData(event.currentTarget);

  // };
  const handleClose = () => { setOpenModal(false); }
  const [inputs, setInputs] = useState([]);
  const [redirect, setRedirect] = useState({stat:false,msg:''});
  const [openModal, setOpenModal] = React.useState(false);
  const [modalMsg, setModalMsg] = React.useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    const headers={'Access-control-Allow-Origin':'*'}
    const formData={
      ...inputs
    }
    if(!inputs.firstName || !inputs.lastName ||! inputs.email || !inputs.password|| !inputs.phoneNo){
      setOpenModal(true);
      setModalMsg("Enter all required data.");
      setModalMsg({title:'Error' , msg:'Enter all required data.'});
    }  else{
    await axios.post(url+'api/user.php/New',formData,{headers})
    .then(res=>{
      if(res.data.status==0){
      setOpenModal(true);
      setModalMsg({title:'Error' , msg:'user registered before'});
      }else if(res.data.status==1){
        setOpenModal(true);
      // setModalMsg(" registered successfully");
      setModalMsg({title:'Congrats',msg:'Registered successfully'});
      setRedirect({stat:true,msg:res.data.msg});
      
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
  // const redirectFun= () =>{

  //   // check backend if info is right 
  //   // check user or admin
  //   // redirect



  // }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Add a new car
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    name="plate-id"
                    required
                    fullWidth
                    id="plate-id"
                    label="Plate-id"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="make"
                    label="Make"
                    name="make"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="model"
                    label="Car Model"
                    name="model"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="year"
                    label="Year"
                    name="year"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="price"
                    label="Car Price"
                    name="price"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="carStatus"
                    label="Car Status"
                    name="carStatus"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="isAvailable"
                    label="Availabilty of Car"
                    name="isAvailable"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="carColor"
                    label="Car Color"
                    name="carColor"
                  />
                </Grid>                

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="carLocation"
                    label="Car Location"
                    name="carLocation"
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="engineCapacity"
                    label="Capacity of Engine"
                    name="engineCapacity"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="carDescription"
                    label="Car Description"
                    name="carDescription"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="imgURL"
                    label="Link of Car Image"
                    name="imgURL"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Add Car
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid> 
      {openModal && <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalMsg}
          </Typography>
        </Box>
      </Modal>
      }


    </ThemeProvider>
  );
}
