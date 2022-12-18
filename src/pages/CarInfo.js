import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import img from "../carImgLogg.jpg"
// import { useNavigate } from "react-router-dom"; 

const backgroundImage = img

function createData(prop, ava) {
  return { prop, ava };
}

const rows = [
  createData('Make',"BMW"),
  createData('Year',"2022"),
  createData('plateID',"123456"),
  createData('status',"out of Service")
];


export default function DenseTable() {
  return (
    <Container>
        <h1>title.price</h1>
        
        <img src={img} height="500px"></img>
         
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 300 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="center">property</TableCell>
            <TableCell align="center">Avaliability</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,index) => (
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
        </Container>
  );
}
