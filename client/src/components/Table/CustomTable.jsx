import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {StyledTableCell, StyledTableRow, useStyles} from "./Table.styles";


export default function CustomTable({studentsData, subjectsData}) {

  const classes = useStyles();
  let rows = [];
  let headerData = null;
  if (studentsData){
      console.log()
      headerData = Object.keys(studentsData[0]).slice(2);
    rows = studentsData.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell>{row.phone}</StyledTableCell>
              <StyledTableCell>{row.email}</StyledTableCell>
              <StyledTableCell>{row.dateOfBirth}</StyledTableCell>
              <StyledTableCell>{row.subjects.map(sub => `${sub.name}, `)}</StyledTableCell>
            </StyledTableRow>
          ));
  } else {
      headerData = Object.keys(subjectsData[0]).slice(2);
    rows = subjectsData.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">{row.name}</StyledTableCell>
              <StyledTableCell>{row.students.map(student => `${student.name}, `)}</StyledTableCell>
            </StyledTableRow>
          ));
  }

  return (
    <TableContainer component={Paper}>
      <CustomTable className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
              {
                  headerData && headerData.map((data, i) =>
                      <StyledTableCell key={i}>{data.toUpperCase()}</StyledTableCell>
                  )
              }
          </TableRow>
        </TableHead>
        <TableBody>
          {rows}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
}
