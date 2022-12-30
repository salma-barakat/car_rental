import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import CardMedia from '@mui/material/CardMedia';
import axios from 'axios';
import { useEffect,useState } from 'react';
import { useNavigate ,useParams} from "react-router-dom"; 
import Button from '@mui/material/Button';
import {url} from '../conf';
export default function DenseTable() {
  const history = useNavigate();
  const {id} = useParams();
  const {Userid} = useParams();
  const [data,setData]=useState({});
  const [row,setRow]=useState([]);
  const[img,setImg]=useState("");
  const[make,setMake]=useState("")
  const[price,setPrice]=useState("")
  const[model,setModel]=useState("")
  console.log(id);
   const buttonNavig=()=>{
if(Userid){
  // form
  history(window.location.pathname+"/reserve");
}
else{
  history("/Log-In");
}

  }
  useEffect(() => {
    setData({});
    setRow([]);
    axios({
      method: 'GET',
      url: url+`api/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => {
      console.log(response)
      setData(response.data);
    })
    .catch((error) => {
      console.log(error)
    })
  },[]);
  useEffect(()=>{
    for (var key in data) {
      if (key!="img"){
        if(key=="make"){
          setMake(data[key])
        }
        if(key=="price"){
          setPrice(data[key])
        }
        if(key=="model"){
          setModel(data[key])
        }
     let x={prop:key,ava:data[key]}
      console.log( {prop:key,ava:data[key]});
      setRow(c=>[...c, x])
      }
      else setImg(data[key]);
    }
  },[data])
  // console.log(info);
  console.log(row);
  return (
    <Container>
        <h3><span>{make} </span>{model} <span></span><span>{price} </span></h3>
        <CardMedia
        sx={{height:{md:'500px',xs:"auto"}}}
        component="img"
        image={img}
      />
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">property</TableCell>
            <TableCell align="center">Avaliability</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {row && row.map((row,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center" >{row.prop}</TableCell>
              <TableCell align="center">{row.ava}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" onClick={buttonNavig} >
     { (Userid) ? "Reserve":"LogIn first"}
    </Button>
        </Container>
  );
}
