import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import {url} from '../conf'
// const cols=["user_id"	,"fname",	"lname",	"phone",	"email"	,"plate_id",	"make",	"model"	,"year",	"color",	"country"	,"price"	
// ,"engin_capacity",	"description"	,"is_available",	"time_reservation",	"pickup_time",	"return_time"];
// const cols2=["plate_id",	"make",	"model"	,"year",	"color",	"country"	,"price"	
// ,"engin_capacity",	"description"	,"is_available",	"time_reservation",	"pickup_time",	"return_time"];
// let cols=["plate_id",	"make",	"model"	,"year",	"color",	"country"	,"price"	
// ,"engin_capacity",	"description"	,"is_available",	"time_reservation",	"pickup_time",	"return_time"];

//  let columns = 
//     cols.map((col)=>{
//         return { id: col, label: col, minWidth: 10, maxWidth:200 }
//     })

export default function Query({specificDay}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows]=React.useState([]);
  const [columns,setColumns] = React.useState([]);
  const [data,setData] = React.useState([]);

// React.useEffect(()=>{
//     setColumns(columnss);
// })

const Query3Fun = async () => {

    const headers = { 'Access-control-Allow-Origin': '*' }
    const formData = {
        specificDay
    }
    console.log(formData.specificDay)
    await axios.post(url + 'api/Reports.php/Query3', formData, { headers })
      .then(res => {
        setData(res.data);
        console.log(res);
        console.log(res.data);
      }
      )
      .catch(function (error) {
        console.log(error)
      });
  }
  React.useEffect(()=>{
    Query3Fun()
  },[specificDay])
  
  let QueryNo=3
React.useEffect(()=>{
  let cols=["plate_id",	"make",	"model"	,"year", 	"status",	"price",	"description"];
 
   let solumns = 
      cols.map((col)=>{
          return { id: col, label: col, minWidth: 10, maxWidth:200 }
      })
    setRows(data);
    setColumns(solumns)
},[data])
console.log(rows);
console.log(data);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow> 
               <TableCell align="center" colSpan={22}>
                Table Data
              </TableCell> 
              
            </TableRow>
           
            <TableRow >
              {
              columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 57, minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}