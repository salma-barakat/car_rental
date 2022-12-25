import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">Add new car</Button>,
  <Button key="two">Edit cars</Button>,
  <Button key="three">Reports</Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 'center',
        },
      }}
    >
   
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="text"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
