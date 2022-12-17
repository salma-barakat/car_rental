
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../carSign.jpg"
const backgroundImage = img

const myStyle={
    backgroundImage: `url(${backgroundImage})`,
    height:'120vh',
    marginTop:'-35px',
    fontSize:'22px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    };

const contactStyle={
    fontDecoration : 'underline',
    fontSize:'22px'
};

function ContactUs() {
    return (
        <div style={myStyle}>
        <h2>ContactUs</h2>
        Our Email : <div style={contactStyle}> <Link href="#" variant="body2">
                      {"CarRental@email.com"}
                    </Link></div>
        Our phone Number: <div style ={contactStyle}><Link href="#" variant="body2">{"012345678910"}</Link></div>

        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        <Box component="form" noValidate sx={{ mt: 3 }}>
        Or send us a message:
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="phoneNo"
                    label="Phone number"
                    name="phoneNo"
                    autoComplete="phoneNo"
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="message"
                    label="Message"
                    name="message"
                    autoComplete="message"
                  />
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Send
              </Button>
            </Box>
            </Box>

      </div> 
        
    )
 
}

export default ContactUs;