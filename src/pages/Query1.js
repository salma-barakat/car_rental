import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function Query({data,QueryNo}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows,setRows]=React.useState([]);
  const [columns,setColumns] = React.useState([]);


React.useEffect(()=>{
  let cols=[];
  if(QueryNo==1){
     cols=["user_id"	,"fname",	"lname",	"phone",	"email"	,"plate_id",	"make",	"model"	,"year",	"color",	"country"	,"price"	
  ,"engin_capacity",	"description"	,"is_available",	"time_reservation",	"pickup_time",	"return_time"];
  }else if (QueryNo==2){
     cols=["plate_id",	"make",	"model"	,"year",	"color",	"country"	,"price"	
  ,"engin_capacity",	"description"	,"is_available",	"time_reservation",	"pickup_time",	"return_time"];
  }else{
    cols=[]
  }
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
            {rows && rows
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