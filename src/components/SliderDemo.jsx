import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
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

import { Pagination, Navigation } from 'swiper/modules';

export default function SliderDemo() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
          >
                {/* ......................................... No: 1 */}
              <SwiperSlide className='swiper-slide'>
    
                  <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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
              </SwiperSlide>
                {/* ......................................... No: 2 */}
              <SwiperSlide className='swiper-slide' >
              <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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
              </SwiperSlide>

                {/*......................................... No: 3 */}
              <SwiperSlide className='swiper-slide'>
              <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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
              </SwiperSlide>

                {/* ......................................... No: 4 */}
              <SwiperSlide className='swiper-slide'>
              <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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
              </SwiperSlide>


            {/*  ......................................... No: 5 */}
              <SwiperSlide className='swiper-slide'>
              <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
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
    </Card></SwiperSlide>
      </Swiper>
    </>
  );
}