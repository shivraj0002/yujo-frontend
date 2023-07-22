import styled from '@emotion/styled';
import { Box, Button, Container, Typography } from '@mui/material';
// import { Helmet } from 'react-helmet-async';
import { Link } from "react-router-dom";
import errorSvg from './../../assets/svg/illustration_404.svg'
import { useEffect } from 'react';



// ----------------------------------------------------------------------

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '75vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function ErrorPage({ setIsInValidUrl }) {

    useEffect(() => {
        setIsInValidUrl(true);
        return () => {
            setIsInValidUrl(false);
        }
    }, [])

    return (
        <>
            <Container>
                <StyledContent sx={{ textAlign: 'center', alignItems: 'center' }}>
                    <Typography variant="h3" paragraph>
                        Sorry, page not found!
                    </Typography>

                    <Typography sx={{ color: 'text.secondary' }}>
                        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your
                        spelling.
                    </Typography>

                    <Box
                        component="img"
                        src={errorSvg}
                        sx={{ height: 260, mx: 'auto', my: { xs: 5, sm: 10 } }}
                    />

                    <Button to="/" size="large" variant="contained" component={Link}>
                        Go to Home
                    </Button>
                </StyledContent>
            </Container>
        </>
    );
}
