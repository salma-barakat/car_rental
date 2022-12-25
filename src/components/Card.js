import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MediaCard(
    {title,model,description, img,price,status,year}
) {
  var nf = Intl.NumberFormat();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" >
          {title}<span> </span>{model}<span> , </span>{year}
        </Typography>
        <Typography gutterBottom variant="h5" >
       {/* {x} */}
          {nf.format(price)}<span> L.E</span> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {description}
        </Typography>
        <Typography variant="body2" color="red">
        {status}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
