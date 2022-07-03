import React, { useState } from 'react';
import Box from '@mui/material/Box';
import './Dashboard.css';
import Button from '@mui/material/Button';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Card } from '@mui/material';


const Dashboard = ({ total }) => {
    const [balance, setBalance] = useState(false);

    const handleBalance = (e) => {
        e.preventDefault();
        setBalance(true);
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}  >
            <Box>
                <h1>Bank</h1>
            </Box>
            <Box>
                <h4>Welcome, Vinay</h4>
            </Box>
            <Box>
            </Box>
            {!balance ? <Button onClick={handleBalance} startIcon={<VisibilityIcon />} variant="contained" size="medium" sx={{ backgroundColor: "#c2185b" }}>View Balance</Button> : <Box sx={{ mb: 3, mt: 1 }}>
                <Card>
                    <Box sx={{ p: 8, display: 'flex', backgroundColor: 'whitesmoke', borderRadius: '16px' }}>
                        <p style={{ color: 'forestgreen' }}>Available Balance : {total}</p>
                    </Box>
                </Card>
            </Box>}
        </Box>
    )
}

export default Dashboard;