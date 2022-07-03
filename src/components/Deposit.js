import React, { useState } from 'react'
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const Deposit = ({ depositHandler }) => {
    const [deposit, setDeposit] = useState(false);

    const [enteredName, setName] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredMode, setMode] = useState('');
    const [enteredDesc, setDesc] = useState('');

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);

    };


    const handleDeposit = (e) => {
        e.preventDefault();
        setDeposit(true);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const depositData = {
            name: enteredName,
            credit: enteredAmount,
            mode: enteredMode,
            desc: enteredDesc,
        };
        depositHandler(depositData);
        setName('');
        setAmount('');
        setMode('');
        setDesc('');
    }

    return (
        <div>
            {!deposit ? <Button onClick={handleDeposit} variant="contained" size="medium" sx={{ mb: 2, ml: 8, backgroundColor: '#212121' }}>Deposit</Button> :
                <form onSubmit={handleSubmit}>
                    <Box sx={{ backgroundColor: 'whitesmoke', borderRadius: '16px' }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.#e1f5fe" gutterBottom>
                                DEPOSIT
                            </Typography>
                            <hr />
                            <Box sx={{ display: 'flex', flexDirection: 'column', mt: 2 }}>
                                <TextField
                                    id="outlined-password-input"
                                    label="Name"
                                    type="text"
                                    sx={{ mb: 2 }}
                                    value={enteredName}
                                    onChange={(e) =>
                                        setName(e.target.value)
                                    }
                                />
                                <TextField
                                    id="outlined-number"
                                    label="Amount"
                                    type="number"
                                    value={enteredAmount}
                                    onChange={(e) =>
                                        setAmount(e.target.value)
                                    }
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    sx={{ mb: 2 }}
                                />
                                <FormControl fullWidth sx={{ mb: 2 }}>
                                    <InputLabel id="demo-simple-select-label">Payment Mode</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="mode"
                                        value={enteredMode}
                                        onChange={(e) =>
                                            setMode(e.target.value)
                                        }
                                    >
                                        <MenuItem value={'Cash'} >Cash</MenuItem>
                                        <MenuItem value={'Cheque'}>Cheque</MenuItem>
                                        <MenuItem value={'Neft'}>Neft</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    value={enteredDesc}
                                    onChange={(e) =>
                                        setDesc(e.target.value)
                                    }
                                />
                            </Box>
                            <CardActions>
                                <Button onClick={handleClick} type="submit" variant="contained" size="medium" sx={{ mb: 2, ml: 8, backgroundColor: '#212121' }}>Pay</Button>
                                <Stack spacing={2} sx={{ width: '100%' }}>
                                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                                        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                                            Money Deposit Success
                                        </Alert>
                                    </Snackbar>
                                </Stack>
                            </CardActions>
                        </CardContent>
                    </Box>
                </form>}
        </div>
    )
}

export default Deposit;