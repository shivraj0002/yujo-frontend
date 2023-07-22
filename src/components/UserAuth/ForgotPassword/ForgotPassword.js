import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link as LinkReactRouter } from 'react-router-dom';
import { Link } from '@mui/material';

function ForgotPassword() {
  const [showOTP, setShowOTP] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (showOTP) {
      console.log({
        email: data.get('email'),
        otp: data.get('otp')
      });
    } else {
      console.log({
        email: data.get('email'),
      });
      setShowOTP(true);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          {showOTP ? (
            <>
              <TextField
                margin="normal"
                required
                fullWidth
                name="otp"
                label="One-Time Password"
                type="text"
                id="otp"
                autoComplete="off"
              />
            </>
          ) : null}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {showOTP ? 'Reset Password' : 'Send OTP'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link component={LinkReactRouter} to="/auth/sign-in" variant="body2">
                Back to Sign In
              </Link>
            </Grid>
            <Grid item>
              <Link component={LinkReactRouter} to="/auth/sign-up" variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default ForgotPassword;
