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
            <StyledRoot>
                <h1>insert tutee name</h1>
            </StyledRoot>
                <Accordion>
                <AccordionSummary
                >
                <Typography>Tutee details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <h2>Level/Subject(s)</h2>
                    <p>insert level and subject</p>
                    <h2>Location</h2>
                    <p>insert location</p>
                    <h2>Number of sessions</h2>
                    <p>insert number of sessions</p>
                    <h2>Organisation</h2>
                    <p>insert organisation</p>
                </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                >
                <Typography>Tutor details</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <h2>Tutor</h2>
                    <p>insert tutor</p>
                    <h2>Email</h2>
                    <p>insert email</p>
                    <h2>Phone number</h2>
                    <p>insert phone number</p>
                    <h2>Tutoring end date</h2>
                    <p>insert date</p>
                </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                >
                <Typography>Tutee assessments</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <h2>Strengths</h2>
                    <p>insert strength</p>
                    <h2>Weaknesses</h2>
                    <p>insert weaknesses</p>
                </Typography>
                </AccordionDetails>
                </Accordion>
                <Accordion>
                <AccordionSummary
                >
                <Typography>Tutee records</Typography>
                </AccordionSummary>
                <AccordionDetails>
                <Typography>
                    <h2>Number of total sessions: insert number</h2>
                    <Accordion>
                    <AccordionSummary
                    >
                    <Typography>Session 1: 18 June 2023</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    Today's tutoring session was truly rewarding. My tutee not only engaged with algebraic concepts but also showcased a remarkable level of determination to grasp even the trickiest parts. Their eagerness to understand made the session a resounding success.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                    <Accordion>
                    <AccordionSummary
                    >
                    <Typography>Session 2: 28 June 2023</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                    I'm thrilled by my tutee's progress in essay structuring. During our session, they displayed a keen interest in implementing the techniques we discussed previously. Their ability to structure thoughts coherently has improved noticeably, which is a promising step forward.
                    </Typography>
                    </AccordionDetails>
                    </Accordion>
                </Typography>
                </AccordionDetails>
                </Accordion>

            <Helmet>
                <title> Update tutor </title>
            </Helmet>


        </>
    )
}