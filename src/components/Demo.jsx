import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'


const Demo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1, 
  };
    


  return (
    <div className="carousel-container" >
      <Slider {...settings}>
<Card sx={{ maxWidth: 345}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil exercitationem excepturi vero iusto vel aliquam accusamus voluptates atque architecto?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Tiger
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil exercitationem excepturi vero iusto vel aliquam accusamus voluptates atque architecto?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          GOAT
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil exercitationem excepturi vero iusto vel aliquam accusamus voluptates atque architecto?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
        image={img4}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lion
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil exercitationem excepturi vero iusto vel aliquam accusamus voluptates atque architecto?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200"
                      image={img5}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Owl
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil exercitationem excepturi vero iusto vel aliquam accusamus voluptates atque architecto?
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
    </Card>
      </Slider>
    </div>
  );
};

export default Demo;
