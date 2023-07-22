import React from 'react';
import { TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const MessageInput = () => {
    const handleSendMessage = () => {
        // Implement sending functionality here
        // For now, it's just a placeholder
        console.log('Sending message...');
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <TextField
                label="Type your message..."
                variant="outlined"
                fullWidth
                style={{ marginRight: '10px' }}
            />
            <IconButton color="primary" onClick={handleSendMessage}>
                <SendIcon />
            </IconButton>
        </div>
    );
};

export default MessageInput;
