import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { Box } from '@mui/system';


const TransactionHistory = ({ passBookData, total }) => {
    const rows = passBookData;
    // const rowsData = passBookData;

    // const [rows, setRows] = useState();

    const handleDelete = (index) => {
        // const updatedRows = rowsData;
        // updatedRows.splice(index, 1);
        // setRows([...updatedRows]);
    }

    return (
        <Box>
            <h3 style={{ display: 'flex', justifyContent: 'center', marginBottom: '50px', marginTop: '100px' }}>Transaction History</h3>
            {rows.length > 0 ? <TableContainer component={Paper} sx={{ backgroundColor: '#e0e0e0' }} >
                <Table sx={{ minWidth: 650, mb: 10 }} size="medium" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>SL.No</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell align="right">Description</TableCell>
                            <TableCell align="right">Debit</TableCell>
                            <TableCell align="right">Credit</TableCell>
                            <TableCell align="right">Mode</TableCell>
                            <TableCell align="right">Closing Balance</TableCell>
                            <TableCell align="right">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{index}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell align="right">{row.desc}</TableCell>
                                <TableCell align="right">{row.debit}</TableCell>
                                <TableCell align="right">{row.credit}</TableCell>
                                <TableCell align="right">{row.mode}</TableCell>
                                <TableCell align="right">{total}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDelete(index)} variant="contained" sx={{ backgroundColor: '#d50000' }}>Delete</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer> : null}
        </Box >
    )
}

export default TransactionHistory;