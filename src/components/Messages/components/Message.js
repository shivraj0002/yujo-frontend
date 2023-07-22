import React from 'react';
import { Paper, Typography } from '@mui/material';

const Message = ({ message }) => {
    return (
        <Paper elevation={2} style={{ padding: '10px', marginBottom: '10px' }}>
            <Typography variant="body1">{message}</Typography>
        </Paper>
    );
};

export default Message;
