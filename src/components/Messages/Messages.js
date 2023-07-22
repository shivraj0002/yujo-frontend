import { CssBaseline, Grid, Paper, Typography } from '@mui/material';
import * as React from 'react';
import ChatList from './components/ChatList';
import MessageBox from './components/MessageBox';







export default function Messages() {


    return (
        <Grid container component="main" sx={{ height: '91.3vh' }}>
            <CssBaseline />
            <Grid
                item
                sm={4}
                md={4}
                sx={{
                    display: { xs: 'none', sm: 'flex' }
                }}

            >
                <ChatList />

            </Grid>
            <Grid item xs={12} sm={8} md={8} component={Paper} elevation={6} square sx={{ justifyContent: 'stretch' }}>
                <MessageBox />
            </Grid>
        </Grid>
    );
}