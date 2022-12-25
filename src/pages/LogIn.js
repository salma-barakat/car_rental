
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import img from "../carImgLogg.jpg"
import { redirect, useNavigate } from "react-router-dom";
import axios from 'axios';
import Modal from '@mui/material/Modal';
// import { useNavigate } from "react-router-dom"; 

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const backgroundImage = img

const theme = createTheme();

export default function LogIn() {
  const history = useNavigate();
  // const handleSubmit = (event) => {



  //   // const data = new FormData(event.currentTarget);

  // };
  const handleClose = () => { setOpenModal(false); }
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const [openModal, setOpenModal] = React.useState(false);
  const [modalMsg, setModalMsg] = React.useState('');
  const handleSubmit = async (event) => {
    console.log({
      email: email,
      password: password
    })
    event.preventDefault();
    const headers = { 'Access-control-Allow-Origin': '*' }
    const formData = {
      email: email
      , password: password
    }
    if (email == '') {
      setOpenModal(true);
      setModalMsg("Enter your Email");
    }
    else if (password == '') {
      setOpenModal(true);
      setModalMsg("Enter your password");
    }
    else {
      await axios.post('http://localhost:80/api/user.php', formData, { headers })
        .then(res => {
          if (res.data.status == 0) {
            setOpenModal(true);
            setModalMsg("Incorect Email or password");
          } else if (res.data.status == 1) {
            history("/user/" + res.data.message)
          }
          console.log(res.data)
          // if (Array.isArray(res.data))
          // setData(res.data);}
        }
        )
        .catch(function (error) {
          console.log(error)
        });
    }
  }
  // const redirectFun= () =>{

  //   // check backend if info is right 
  //   // check user or admin
  //   // redirect



  // }
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item  >
                  <Link href="#" variant="body2" >
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid> 
      {openModal && <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Error
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalMsg}
          </Typography>
        </Box>
      </Modal>
      }


    </ThemeProvider>
  );
}
