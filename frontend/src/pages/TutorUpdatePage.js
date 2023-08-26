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
      alignItems: 'center',
      marginRight: 60,
      gap: 20
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
<<<<<<< HEAD
                <Stack spacing={3}>
                    <TextField name="email" label="Email address" />
                </Stack>

                <Stack spacing={3}>
                    <TextField name="description" label="Session Description" />
                </Stack>

                <Stack spacing={3}>
                    <TextField name="hours" label="Number Of Hours" />
                </Stack>

=======
>>>>>>> 2e3d942820fa753d1a406b46af89300446148c03
                {mdUp && (
                    <StyledContent>
                        <Typography variant="h2" sx={{ px: 4, mt: 2, mb: 5, mr: 5}}>
                        Tutor Update Form
                        </Typography>
                    </StyledContent>
                )}
                <Stack spacing={3}>
                    <TextField name="date" label="Date of session" />
                </Stack>

                <Stack spacing={3}>
                    <TextField name="hours" label="Number of hours" />
                </Stack>

                <Stack spacing={3}>
                    <TextField name="description" label="Session description" />
                </Stack>
                
                <Button type='submit' variant='contained'>Submit</Button>
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