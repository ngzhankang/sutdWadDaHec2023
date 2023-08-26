import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, TextField, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components
import Logo from '../components/logo';
import Iconify from '../components/iconify';

// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  }));

const StyledContent = styled('div')(({ theme }) => ({
    maxWidth: 480,
    margin: 'auto',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function TutorUpdatePage() {
    const mdUp = useResponsive('up', 'md');
    return (
        <>
            <Helmet>
                <title> Update tutor </title>
            </Helmet>
            
            <StyledRoot>
                <Stack spacing={3}>
                    <TextField name="email" label="Email address" />
                </Stack>

                <Stack spacing={3}>
                    <TextField name="description" label="Session Description" />
                </Stack>

                <Stack spacing={3}>
                    <TextField name="hours" label="Number Of Hours" />
                </Stack>

                {mdUp && (
                    <StyledContent>
                        <Typography variant="h2" sx={{ px: 4, mt: 2, mb: 5, mr: 5}}>
                        Hi, Welcome Back
                        </Typography>
                    </StyledContent>
                )}
{/* 
            <Container maxWidth="sm">
                <StyledContent>
                    <Typography variant="h4" gutterBottom>
                    Hello!
                    </Typography>
                </StyledContent>
            </Container> */}
            </StyledRoot>
        </>
    )
}