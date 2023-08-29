import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import img1 from './img1.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
import img5 from './img5.jpg'
import "./div1.css"

function Gallery() {
    const cardStyles= {
        margin: '4px',
        width: '280px',
        height: '380px',
    }
  return (
      <>
          <h1 className='head1'>Animal Gallery</h1>
          <div className="photo-container">
      <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img4}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img5}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card><Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img2}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img3}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
                      image={img5}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              <Card style={cardStyles}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Rhino
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil Lorem ipsum dolor sit.
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined">View</Button>
        <Button variant="outlined">Share</Button>
      </CardActions>
              </Card>
              </div>
    </>
  )
}

export default Gallery
