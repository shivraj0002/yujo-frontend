import { Avatar, Box, Button, ButtonGroup, Container, CssBaseline, IconButton, TextField, Typography } from '@mui/material'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react'
import PasswordChange from './components/PasswordChange';

const Profile = () => {
  const [editOpration, setEditOpration] = useState(false);
  const [changingPassword, setChangingPassword] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = React.useState(null);

  const handleAvatarClick = () => {
    // Trigger the input file click event
    document.getElementById('upload-image-input').click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Handle the selected image file
    setImage(file);
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main', width: 100, height: 100 }}>
          <AccountCircleIcon sx={{ fontSize: 72 }} />

          <IconButton
            sx={{
              position: 'absolute',
              bottom: -5,
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'transparent',
              zIndex: 100
            }}
            onClick={handleAvatarClick}
          >
            <CameraAltIcon color='primary' />
          </IconButton>
          <input
            type="file"
            id="upload-image-input"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </Avatar>
        <Typography component="h1" variant="h5">
          {'John Smith'}
        </Typography>
        <Typography variant="subtitle1">{'johnsmith.tregadevs.io'}</Typography>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button>Followers: {250} </Button>
          <Button>Following: {100}</Button>
        </ButtonGroup>



        {editOpration && <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin="normal"
            fullWidth
            id="name"
            label="Name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoFocus
          />
          <Button
            onClick={() => { setEditOpration(false); }}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>}


        {changingPassword ? <PasswordChange /> : null}



        {(!changingPassword && !editOpration) ? <><Button
          onClick={() => { setEditOpration(true); }}
          fullWidth
          variant="contained"
          sx={{ mt: 1, mb: 1 }}
        >
          Edit Profile
        </Button>
          <Button
            onClick={() => { setChangingPassword(true); }}
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 1 }}
          >
            Change Password
          </Button>

          <Button
            onClick={() => { }}
            fullWidth
            variant="contained"
            color='error'
            sx={{ mt: 1, mb: 1 }}
          >
            Log Out
          </Button> </> : null}

      </Box>

    </Container >
  )
}

export default Profile