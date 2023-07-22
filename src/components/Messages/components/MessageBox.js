import { Container, CssBaseline, Paper, Typography, Box } from '@mui/material'
import React from 'react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'

const MessageBox = () => {
    return (
        <Container component="main" maxWidth="xl" sx={{ height: '100%', pb: '10px' }}>
            <CssBaseline />
            <Paper variant='outlined' style={{ padding: '20px', height: '100%', position: 'relative' }}>
                <Typography variant="h5" gutterBottom>
                    Messages
                </Typography>
                <MessageList />
                <Box width={'95%'} sx={{ position: 'absolute', bottom: 5, left: '50%', transform: 'translateX(-50%)' }}>
                    <MessageInput />
                </Box>
            </Paper>
        </Container>
    )
}

export default MessageBox