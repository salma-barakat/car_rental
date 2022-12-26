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
import DataTable from '../components/Table'

export default function AdminSearch() {
  const [data, setData] = useState([]);
  const [inputs, setInputs] = useState([]);
  const [select,setSelect] = useState('');
  const [age, setAge] = React.useState('');
  
  // const [inputs,setInputs]= useState({plate_id:'',make:"",model:'',year:'',price:'',car_status:'',color:'',origin:''});
 console.log(inputs)
 const submit=async(e)=>{

  const headers={'Access-control-Allow-Origin':'*'}
  const formData={
   ...inputs
  }

  await axios.post(url+'api/admin.php',formData,{headers})
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
  var today = new Date();
  var DD = String(today.getDate()).padStart(2, '0');
  var MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var YYYY = today.getFullYear();
  today = YYYY + '-' + MM + '-' + DD;
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
            label="country"
            type="search"
            variant="standard"
            onChange={e=>{setInputs({ ...inputs, country: e.target.value })}} 
          />
          <FormControl variant="standard" sx={{ m: 1, minWidth: 211 }}>
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
               </Select>
          </FormControl>
                 <TextField
            id="standard-search"
            label="Email"
            type="search"
            variant="standard"
            name="email"
            onChange={e=>{setInputs({ ...inputs, email: e.target.value })}} 
          />
           <TextField
            id="standard-search"
            label="Phone"
            type="search"
            variant="standard"
            name="phone"
            onChange={e=>{setInputs({ ...inputs, phone: e.target.value })}} 
          />
            <TextField
                    id="date"
                    label="Reservation Date"
                    type="date"
                    defaultValue={"yyyy-mm-dd"}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={inputs.reservationDate}
                    onChange={(e) => {
                      console.log(e.target.value)
                      // if (e.target.value <= today) {
                        setInputs({ ...inputs, reservationDate: e.target.value })
                      // }
                    }
                    }
                  />
             
              {/* <MenuItem value={30}>Thirty</MenuItem> */}
              <DataTable data = {data} />
           

        </div>
      </Box>
      {/* {data&&< Grid data={data} />} */}
    </Box>
  );
}