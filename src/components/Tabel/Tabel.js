import React from 'react';
import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tabel = () => {
    const rows = [
        {
            id: 12332,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'approved'
        },
        {
            id: 12152,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'approved'
        },
        {
            id: 12432,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'approved'
        },
        {
            id: 14532,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'approved'
        },
        {
            id: 16532,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'approved'
        },
        {
            id: 18732,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'approved'
        },
        {
            id: 12732,
            product: 'Gaming Laptop',
            image: 'https://m.media-amazon.com/images/I/417t5LflA9L._AC_.jpg',
            customer: 'Jihan Medhat',
            date: '1 Mars',
            amount: 251,
            method: 'Cash on delivery',
            status: 'pending'
        },
      ];
  return (
    <Wrapper>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                      <TableCell className='cell'>Product</TableCell>
                      <TableCell align="center" className='cell'>Customer</TableCell>
                      <TableCell align="center" className='cell'>Image</TableCell>
                      <TableCell align="center" className='cell'>Amount</TableCell>
                      <TableCell align="center" className='cell'>Method</TableCell>
                      <TableCell align="center" className='cell'>Status</TableCell>
                    </TableRow>
                </TableHead>
            <TableBody>
            {rows.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.product}
                  </TableCell>
                  <TableCell align="center">{row.customer}</TableCell>
                  <TableCell align="center" style={{width: '100px', height: '100px'}}>
                    <img src={row.image} alt="product" />
                  </TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell align="center">{row.method}</TableCell>
                  <TableCell align="center">
                    <span className={`status ${row.status}`}
                    >{row.status}</span>
                  </TableCell>
                </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Wrapper>
  )
}

const Wrapper = styled.article`
    padding:1px;.

    .product {
        width: 100px;
        height: 100px;
        boredr: 2px solid #000;
    }
    .cell {
        font-size: 1.2rem;
        font-weight: bold;
        color: grey;
    }
   .status.approved {
    color: green;
   }
   .status.pending {
    color: yellow;
   } 
`

export default Tabel