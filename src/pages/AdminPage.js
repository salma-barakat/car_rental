
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
    //backgroundImage: `url(${backgroundImage})`,
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

function AdminPage() {
    return (
        <div style={myStyle}>
        
        {/* <h2>ContactUs</h2>
        Our Email : <div style={contactStyle}> <Link href="#" variant="body2">
                      {"CarRental@email.com"}
                    </Link></div>
        Our phone Number: <div style ={contactStyle}><Link href="#" variant="body2">{"012345678910"}</Link></div> */}
        <h1> Admin</h1>
       
        <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
        <Box component="form" noValidate sx={{ mt: 3 }}>
        {   <h2> Options</h2>
           
          /* Or send us a message: */}
              
              <Grid >
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register a new car
              </Button>
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Update cars
              </Button>
              
              </Grid>
            </Box>
            
            <Box component="form" noValidate sx={{ mt: 3 }}>
        {   <h2> Reports</h2>
          
        }
             
              <Grid >
              <h5>Reservations during the period :</h5>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="from1"
                  label="from"
                  name="from1"
                  autoComplete="date"
                  autoFocus
                />
                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="to1"
                  label="to"
                  name="to2"
                  autoComplete="email"
                  autoFocus
                />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
              submit
              </Button>
              <h5>Reservations during the period :</h5>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="from2"
                  label="from"
                  name="from2"
                  autoComplete="date"
                  autoFocus
                />
                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="to2"
                  label="to"
                  name="to2"
                  autoComplete="email"
                  autoFocus
                />
                
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                submit
              </Button>
              <h5>Status of cars on day:</h5>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="day1"
                  label="day"
                  name="day1"
                  autoComplete="date"
                  autoFocus
                />
               
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                submit
              </Button>
              <h5>Reservations of the customer:</h5>
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="cid"
                  label="customer id"
                  name="cid"
                  autoComplete="date"
                  autoFocus
                />
                
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                submit
              </Button>
              
              <h5>Daily payments in the period :</h5>
              
              <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="from3"
                  label="from"
                  name="from3"
                  autoComplete="date"
                  autoFocus
                />
                   <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="to3"
                  label="to"
                  name="to3"
                  autoComplete="date"
                  autoFocus
                />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                submit
              </Button>
              
              </Grid>
            </Box>
            </Box>

      </div> 
        
    )
 
}

export default AdminPage;