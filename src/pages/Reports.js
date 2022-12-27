import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {url} from '../conf'
import Query from './Query1'; 
import Query3 from './Query3'; 
import Query4 from './Query4'; 
import Query5 from './Query5'; 
import { Container } from '@mui/system';
function TabPanel(props) {

  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [returnDate1, setReturnDate1] = React.useState();
  const [returnDate, setReturnDate] = React.useState();
  const [specificDay,setSpecificDay] = React.useState('22-2-2020');
  // const [returnDate2, setReturnDate2] = React.useState();
  const [returnDate3, setReturnDate3] = React.useState();
  const [pickDate1, setPickDate1] = React.useState('22-2-2020');
  const [pickDate, setPickDate] = React.useState();
  const [userId, setUserId] = React.useState();
  const [pickDate2, setPickDate2] = React.useState();
  const [pickDate3, setPickDate3] = React.useState('22-2-2020');
  const [data, setData] = React.useState();

  const Query1Fun = async () => {

    const headers = { 'Access-control-Allow-Origin': '*' }
    const formData = {
      returnDate1, pickDate1
    }
    await axios.post(url + 'api/Reports.php/Query1', formData, { headers })
      .then(res => {
        setData(res.data);
        console.log(res);
        console.log(res.data);
      }
      )
      .catch(function (error) {
        console.log(error)
      });
  }

  useEffect(() => {
    console.log("in ")
    Query1Fun();
  }, [returnDate1, pickDate1])

  // useEffect(() => {
  //   console.log("in ")
  //   Query3Fun();
  // }, [specificDay])

  // const [pickDate, setPickDate] = React.useState(new Date().toISOString().slice(0, 10));
  const [Difference_In_Days, setDifference_In_Days] = React.useState(new Date().toISOString().slice(0, 10));
  // const [data, setData] = React.useState(new Date().toISOString().slice(0, 10));
  const [msg, setMsg] = useState();
  // const history = useNavigate();
  React.useEffect(() => {
    var date1 = new Date(pickDate);
    var date2 = new Date(returnDate);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    setDifference_In_Days(Difference_In_Time / (1000 * 3600 * 24));
    // console.log(Difference_In_Days)
  }, [pickDate, returnDate])

  var today = new Date();
  var DD = String(today.getDate()).padStart(2, '0');
  var MM = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var YYYY = today.getFullYear();
  today = YYYY + '-' + MM + '-' + DD
  console.log(typeof returnDate)

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
     sx={{ borderBottom: 1, borderColor: 'divider' }}
    >
      <Tabs
        // orientation="horizontal"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        // aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="All reservations within a specified period including all car and customer information" {...a11yProps(0)} />
        <Tab label="All reservations of any car within a specified period including all car information" {...a11yProps(1)} />
        <Tab label="The status of all cars on a specific day." {...a11yProps(2)} />
        <Tab label="All reservations of specific customer including customer information, car model and plate id." {...a11yProps(3)} />
        <Tab label="Daily payments within specific period. " {...a11yProps(4)} />
      </Tabs>
      <TabPanel value={value} index={0} >
        <Container/>
        {/* <h5> from </h5> */}
        <TextField
          id="date"
          label="Starting Date"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={pickDate1}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value <= today) {
              setPickDate1(e.target.value)
            // }
          }
          }
        />
        {/* <h5> to </h5> */}
        <TextField
          id="date"
          label="Ending Date"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={returnDate1}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value >= pickDate1) {
              setReturnDate1(e.target.value)
            // }
          }
          }
        />
        
        {data&&<Query data={data} QueryNo={1} />}
<Container/>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <Container/>
        {/* <h5> from </h5> */}
        <TextField
          id="date"
          label="Starting Date"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={pickDate1}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value <= today) {
              setPickDate1(e.target.value)
            // }
          }
          }
        />
        {/* <h5> to </h5> */}
        <TextField
          id="date"
          label="Ending Date"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={returnDate1}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value >= pickDate1) {
              setReturnDate1(e.target.value)
            // }
          }
          }
        />
        
        {data&&<Query data={data} QueryNo={2} />}
<Container/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <h5> pick a day </h5>
        <TextField
          id="date"
          label="Day"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={specificDay}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value <= today) {
              setSpecificDay(e.target.value)

            // }

          }

          }

        />
         {<Query3 specificDay={specificDay} />}

      </TabPanel>
      <TabPanel value={value} index={3}>
        <h5>Enter customers id</h5>
        <TextField
          margin="normal"
          required
          fullWidth
          id="cid"
          label="customer id"
          name="cid"
          //autoComplete=""
          autoFocus
          onChange={e=>{setUserId(e.target.value)}}
        />
         {<Query4 id={userId} />}
      </TabPanel>
      <TabPanel value={value} index={4}>
        <h5> from </h5>
        <TextField
          id="date"
          label="starting Date"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={pickDate3}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value <= today) {
              setPickDate3(e.target.value)

            // }

          }

          }
        />
        <h5> to </h5>
        <TextField
          id="date"
          label="ending Date"
          type="date"
          defaultValue={today}
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
          value={returnDate3}
          onChange={(e) => {
            console.log(e.target.value)
            // if (e.target.value <= today) {
              setReturnDate3(e.target.value)

            // }

          }

          }
        />
          {<Query5 startingDate={pickDate3} endingDate={returnDate3} />}
      </TabPanel>
    </Box>
  );
}
