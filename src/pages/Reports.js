import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';

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
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: '100vh' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="All reservations within a specified period including all car and customer information" {...a11yProps(0)} />
        <Tab label="All reservations of any car within a specified period including all car information" {...a11yProps(1)} />
        <Tab label="The status of all cars on a specific day." {...a11yProps(2)} />
        <Tab label="All reservations of specific customer including customer information, car model and plate id." {...a11yProps(3)} />
        <Tab label="Daily payments within specific period. " {...a11yProps(4)} />
        </Tabs>
      <TabPanel value={value} index={0}>
        <h5> from </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
        <h5> to </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h5> from </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
        <h5> to </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h5> pick a day </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
        
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
                />
      </TabPanel>
      <TabPanel value={value} index={4}>
      <h5> from </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
        <h5> to </h5>
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
                      if (e.target.value <= today) {
                        setPickDate(e.target.value)

                      }

                    }

                    }
                  />
      </TabPanel>
    </Box>
  );
}
