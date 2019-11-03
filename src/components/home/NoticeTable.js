import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  root: {
    backgroundColor : 'rgba(255,255,255,0.2)',
    borderRadius: '10px',
    width: '95%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function createData(title, writer, date,link) {
  return { title, writer, date,link };
}

const rows = [
  createData('연구원 모집', 'scott', '29_Aug','Notice'),
  createData('Welcome SELAB', 'scott', '7_Mar','Notice'),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Title</TableCell>
            <TableCell>writer</TableCell>
            <TableCell>date</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.writer}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}