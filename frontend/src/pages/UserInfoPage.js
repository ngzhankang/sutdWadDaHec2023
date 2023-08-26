import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, TextField, Divider, Stack, Button } from '@mui/material';
// hooks
import useResponsive from '../hooks/useResponsive';
// components

    
// ----------------------------------------------------------------------

const StyledRoot = styled('div')(({ theme }) => ({
    [theme.breakpoints.up('md')]: {
        display: 'flex',
    },
}));

export default function TutorUpdatePage() {
    const mdUp = useResponsive('up', 'md');
    return (
        <>
            <Helmet>
                <title> Update tutor </title>
            </Helmet>

            <StyledRoot>
                <p>hello</p>
            
            </StyledRoot>

            <StyledRoot>
                <h1>insert tutee name</h1>
            </StyledRoot>

            <StyledRoot>
                <h1>tutor</h1>
            </StyledRoot>

            <StyledRoot>
                <p>insert tutor name</p>
            </StyledRoot>

            <StyledRoot>
                <h1>email</h1>
            </StyledRoot>

            <StyledRoot>
                <p>insert email</p>
            </StyledRoot>

            <StyledRoot>
                <h1>phone number</h1>
            </StyledRoot>

            <StyledRoot>
                <p>insert phone number</p>
            </StyledRoot>

            <StyledRoot>
                <h1>tutoring end date</h1>
            </StyledRoot>

            <StyledRoot>
                <p>insert tutoring end date</p>
            </StyledRoot>
        </>
    )
}