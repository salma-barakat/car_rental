import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import Navbar from "../components/Navbar"
import Grid from "../components/Grid"
import axios from 'axios';
import { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {url} from '../conf';

export default function FormPropsTextFields() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [select,setSelect] = useState('');
  
 
 const submit=async(e)=>{

  const headers={'Access-control-Allow-Origin':'*'}
  const formData={
   ...inputs
  }
  await axios.post(url+'api/',formData,{headers})
  .then(res=>{console.log(res.data)
    if (Array.isArray(res.data))
  setData(res.data);}
 )
  .catch(function(error){
    console.log(error)
  });
}
  useEffect(() => {

    submit()
  },[inputs]);

  console.log(data)
   return (
    <Box>
      <Navbar />
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      > 
        <div>
          <TextField
            id="standard-search"
            label="Plate ID"
            type="search"
            variant="standard"
            name="plate_id"
            onChange={e=>{setInputs({ ...inputs, plate_id: e.target.value })}} 
          />
          <TextField
            id="standard-search"
            label="Make"
            type="search"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, make: e.target.value })}} 
          />
          <TextField
            id="standard-search"
            label="Model"
            type="search"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, model: e.target.value })}} 
          />
          <TextField
            id="standard-search"
            label="Year"
            type="number"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, year: e.target.value })}} 
          />
          <TextField
            id="standard-search"
            label="Price"
            type="search"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, price: e.target.value })}} 
          />
          <TextField
            id="standard-search"
            label="Color"
            type="search"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, color: e.target.value })}} 
          />
          <TextField
            id="standard-search"
            label="Country"
            type="search"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, country: e.target.value })}} 
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-label">Car Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={select}
              label="Car Status"
              onChange={e=>{setInputs({ ...inputs, car_status: e.target.value });setSelect(e.target.value)}} 
            >
              <MenuItem value={'Availbale for rent'}>Availbale for rent</MenuItem>
              <MenuItem value={"Reserved"}>out of service</MenuItem>
            </Select>
          </FormControl>

        </div>
      </Box>
      {data&&< Grid data={data} />}
    </Box>
  );
}