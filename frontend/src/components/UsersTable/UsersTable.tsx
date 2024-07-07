import React from 'react';
import { FC } from 'react';

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { IUserData } from '../../App';

export const UsersTable: FC<{ users: IUserData[] }> = ({ users }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{ width: '700px', borderRadius: '25px' }}
    >
      <Table
        sx={{ width: '650px', margin: '0 auto' }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 &&
            users.map(({ email, number }, id) => (
              <TableRow
                key={id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {id + 1}
                </TableCell>
                <TableCell align="left">{email}</TableCell>
                <TableCell align="left">{`${number.slice(0, 2)}-${number.slice(2, 4)}-${number.slice(4)}`}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
