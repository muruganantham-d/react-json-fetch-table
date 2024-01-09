import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



// Dta Fetch

const tableData = async () => {
    let data; // Declare the data variable
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      data = await response.json(); // Assign the JSON data to the data variable
  
      console.log(data, "response data");
    } catch (error) {
      console.error('Error:', error);
    }
  
    // Now you can use the data variable here or in any other part of your code.
  }
  
  tableData();
  

  



export default function CustomizedTables() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">UserName</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((datas) => (
            <StyledTableRow key={datas.name}>
              <StyledTableCell component="th" scope="row">
                {datas.id}
              </StyledTableCell>
              <StyledTableCell align="right">{datas.name}</StyledTableCell>
              <StyledTableCell align="right">{datas.username}</StyledTableCell>
              <StyledTableCell align="right">{datas.email}</StyledTableCell>
              <StyledTableCell align="right">{datas.address}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}