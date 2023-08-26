import { Helmet } from 'react-helmet-async';
// @mui
import { styled } from '@mui/material/styles';
import { Link, Container, Typography, TextField, Divider, Stack, Button, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

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
                <Accordion>
                <AccordionSummary
                >
                <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                >
                <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
                </AccordionDetails>
            </Accordion>

            <Helmet>
                <title> Update tutor </title>
            </Helmet>

            <StyledRoot>
                
                <p>hi</p>
            
            </StyledRoot>
        </>
    )
}