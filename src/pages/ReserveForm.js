
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
import img from "../imgSign.jpg"
import { useNavigate, useParams } from "react-router-dom";
import Stack from '@mui/material/Stack';
import axios from 'axios';
import { useEffect, useState } from 'react';

// import BasicModal from '../components/Modal'
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {url} from '../conf';
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

const ReserveForm = () => {
  const { id } = useParams();
  console.log(id)
  const { Userid } = useParams();
  console.log(Userid)
  useEffect(() => {
    axios({
      method: 'GET',
      url: url+`api/${id}`,
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        console.log(response)
        setData(response.data);
      })
      .catch((error) => {
        console.log(error)
      })

  }, [])
  const [openModal, setOpenModal] = useState(false);
  const submit = async (e) => {
    e.preventDefault();

    const headers = { 'Access-control-Allow-Origin': '*' }
    const formData = {
      pickDate, returnDate
    }
    await axios.post(url+`/api/reserve/${Userid}/${id}`, formData, { headers })
      .then(res => {
        console.log(res.data)
        setOpen(true);
        setMsg(res.data)
        //   if (Array.isArray(res.data))
        // setData(res.data);
      }
      )
      .catch(function (error) {
        console.log(error)
      });
  }
  // const [value, setValue] = React.useState(null);
  const [returnDate, setReturnDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [pickDate, setPickDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [Difference_In_Days, setDifference_In_Days] = React.useState(new Date().toISOString().slice(0, 10));
  const [data, setData] = React.useState(new Date().toISOString().slice(0, 10));
  const [msg, setMsg] = useState();
  // const history = useNavigate();
  React.useEffect(() => {
    var date1 = new Date(pickDate);
    var date2 = new Date(returnDate);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    setDifference_In_Days((Difference_In_Time / (1000 * 3600 * 24))+1);
    // console.log(Difference_In_Days)
  }, [pickDate, returnDate])
  // const handleSubmit = (event) => {

  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const myStyle = {
    backgroundImage: `url(${backgroundImage})`,
    height: '120vh',
    marginTop: '-70px',
    fontSize: '50px',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }
  const handleSelect = (ranges) => {
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  const history = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => { setOpen(false); history(msg.status==1?"/user/"+Userid:"");}
  // console.log(openModal)
  var today = new Date();
  var DD = String(today.getDate()).padStart(2, '0');
  var MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var YYYY = today.getFullYear();
  today = YYYY + '-' + MM + '-' + DD
  console.log(typeof returnDate)
  return (
    <div style={myStyle}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Reservation
            </Typography>
            <Box component="form" noValidate onSubmit={submit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="date"
                    label="PickUp Date"
                    type="date"
                    defaultValue={today}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={pickDate}
                    onChange={(e) => {
                      console.log(e.target.value)
                      if (e.target.value >= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
                </Grid>
                <Grid item xs={4} sm={4}></Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="date"
                    label="return Date"
                    type="date"
                    defaultValue={today}
                    sx={{ width: 220 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={returnDate}
                    onChange={(e) => {
                      console.log(e.target.value)
                      if (e.target.value >= pickDate) {
                        setReturnDate(e.target.value)
                      }
                    }
                    }
                  />
                </Grid>
                <Grid container>
                  <Grid item >
                    Payment Amount = {data.price * Difference_In_Days}
                  </Grid>
                </Grid>

              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={submit}
              >
                Reserve
              </Button>
              {/* {openModal && */}
                {/* // <BasicModal handleOpen={setOpenModal(false)}  msg={msg.message} title={msg.status==1?"Success":"Failed"} redirect={msg.status==1?"/user/"+Userid:""}/> */}
                {open&&<Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      {msg.status == 1 ? "Success" : "Failed"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                      {msg.message}
                    </Typography>
                  </Box>
                </Modal>
}

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default ReserveForm;