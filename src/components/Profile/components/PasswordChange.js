import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';

const PasswordChange = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleOldPasswordVisibilityToggle = () => {
        setShowOldPassword((prevShowOldPassword) => !prevShowOldPassword);
    };

    const handleNewPasswordVisibilityToggle = () => {
        setShowNewPassword((prevShowNewPassword) => !prevShowNewPassword);
    };

    const handleConfirmNewPasswordVisibilityToggle = () => {
        setShowConfirmNewPassword((prevShowConfirmNewPassword) => !prevShowConfirmNewPassword);
    };

    const handleOldPasswordChange = (event) => {
        setOldPassword(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
        // Check if new password matches the confirmed password
        setPasswordsMatch(event.target.value === confirmNewPassword);
    };

    const handleConfirmNewPasswordChange = (event) => {
        setConfirmNewPassword(event.target.value);
        // Check if new password matches the confirmed password
        setPasswordsMatch(event.target.value === newPassword);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (newPassword === confirmNewPassword) {
            // Handle password change logic here
            console.log('Old Password:', oldPassword);
            console.log('New Password:', newPassword);
            console.log('Confirm New Password:', confirmNewPassword);
        } else {
            console.log('Passwords do not match!');
        }
    };

    return (
        <Box component="form" noValidate sx={{ mt: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }} onSubmit={handleSubmit}>
            <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-old-password">Old Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-old-password"
                    type={showOldPassword ? 'text' : 'password'}
                    value={oldPassword}
                    onChange={handleOldPasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={showOldPassword ? 'Hide old password' : 'Show old password'}
                                onClick={handleOldPasswordVisibilityToggle}
                                onMouseDown={(e) => e.preventDefault()} // Prevent focus change on click
                                edge="end"
                            >
                                {showOldPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Old Password"
                />
            </FormControl>

            <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-new-password">New Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-new-password"
                    type={showNewPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={handleNewPasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={showNewPassword ? 'Hide new password' : 'Show new password'}
                                onClick={handleNewPasswordVisibilityToggle}
                                onMouseDown={(e) => e.preventDefault()} // Prevent focus change on click
                                edge="end"
                            >
                                {showNewPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="New Password"
                />
            </FormControl>

            <FormControl sx={{ m: 1 }} variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-confirm-new-password">Confirm New Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-confirm-new-password"
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    value={confirmNewPassword}
                    onChange={handleConfirmNewPasswordChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label={showConfirmNewPassword ? 'Hide confirm new password' : 'Show confirm new password'}
                                onClick={handleConfirmNewPasswordVisibilityToggle}
                                onMouseDown={(e) => e.preventDefault()} // Prevent focus change on click
                                edge="end"
                            >
                                {showConfirmNewPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Confirm New Password"
                />
            </FormControl>

            <Button variant="contained" type="submit" disabled={(!passwordsMatch || newPassword.length === 0)} fullWidth>
                Change Password
            </Button>
        </Box>
    );
};

export default PasswordChange
