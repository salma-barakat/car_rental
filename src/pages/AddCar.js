
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
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../collectionCars.jpg"
import { redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
import Modal from '@mui/material/Modal';
import Header from "../pages/Header";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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

export default function AddCar() {
  const history = useNavigate();
  const handleClose = () => { setOpenModal(false); }
  const [inputs, setInputs] = useState([]);
  // const [redirect, setRedirect] = useState({stat:false,msg:''});
  const [openModal, setOpenModal] = React.useState(false);
  const [modalMsg, setModalMsg] = React.useState({});
  const [select,setSelect] = useState('');

  const handleSubmit = async (event) => {

    event.preventDefault();
    const headers={'Access-control-Allow-Origin':'*'}
    const formData={
      ...inputs
    }
    if(!inputs.plate_id || !inputs.color ||! inputs.engineCapacity || !inputs.isAvailable|| !inputs.make ||
      !inputs.model || !inputs.year ||! inputs.price || !inputs.imgURL|| !inputs.car_location ||
      !inputs.carDescription || !inputs.car_status  ){
      
      setOpenModal(true);
      setModalMsg({title:'Error' , msg:'Enter all required data.'});

    }  else{
    await axios.post(url+'api/admin.php/New',formData,{headers})
    .then(res=>{
      console.log(res.data)
      if(res.data.status==0){
      setOpenModal(true);
      setModalMsg({title:'Error' , msg:'user registered before'});
      }else if(res.data.status==1){
        setOpenModal(true);
      setModalMsg({title:'Congrats',msg:'Registered successfully'});
      // setRedirect({stat:true,msg:res.data.msg});
      
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
    <>
    {/* // <div className="App"> */}
    <Header />
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
                    onChange={e=>{setInputs({ ...inputs, plate_id: e.target.value })}} 
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="make"
                    label="Make"
                    name="make"
                    onChange={e=>{setInputs({ ...inputs, make: e.target.value })}} 

                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="model"
                    label="Car Model"
                    name="model"
                    onChange={e=>{setInputs({ ...inputs, model: e.target.value })}} 

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="year"
                    label="Year"
                    name="year"
                    onChange={e=>{setInputs({ ...inputs, year: e.target.value })}} 

                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="carDescription"
                    label="Car Description"
                    name="carDescription"
                    onChange={e=>{setInputs({ ...inputs, carDescription: e.target.value })}} 

                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="imgURL"
                    label="Link of Car Image"
                    name="imgURL"
                    onChange={e=>{setInputs({ ...inputs, imgURL: e.target.value })}} 
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="isAvailable"
                    label="Availabilty of Car"
                    name="isAvailable"
                    onChange={e=>{setInputs({ ...inputs, isAvailable: e.target.value })}} 

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="carColor"
                    label="Car Color"
                    name="carColor"
                    onChange={e=>{setInputs({ ...inputs, color: e.target.value })}} 

                  />
                </Grid>                

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="engineCapacity"
                    label="Capacity of Engine"
                    name="engineCapacity"
                    onChange={e=>{setInputs({ ...inputs, engineCapacity: e.target.value })}} 

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="price"
                    label="Car Price"
                    name="price"
                    onChange={e=>{setInputs({ ...inputs, price: e.target.value })}} 
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="carLocation"
                    label="Car Location"
                    name="carLocation"
                    onChange={e=>{setInputs({ ...inputs, car_location: e.target.value })}} 

                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                <InputLabel id="demo-simple-select-label">Car Status</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={select}
                label="Car Status"
                onChange={e=>{setInputs({ ...inputs, car_status: e.target.value });setSelect(e.target.value)}} 
                >
              <MenuItem value={'Availbale for rent'}>Availbale for rent</MenuItem>
              <MenuItem value={"Reserved"}>Reserved</MenuItem>
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
            </Select>
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit} 
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
          {modalMsg.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalMsg.msg}
          </Typography>
        </Box>
      </Modal>
      }


    </ThemeProvider>
    </>
  );
}
