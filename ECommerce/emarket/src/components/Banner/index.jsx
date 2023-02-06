import React from 'react';
import "./style.css";
import { Carousel } from 'antd';
import { banner,banner2,banner3,banner4 } from '../../images';

const contentStyle = {
  height: '500px',
  color: 'black',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#ffffff',
  
};

const Banner = () => (
  <Carousel autoplay>
    <div>
      <h3 style={contentStyle}>
        <img src={banner} style={{width:"100%"}} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={banner2} style={{width:"100%",objectFit:"cover",height:600}} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={banner3} style={{width:"100%",objectFit:"contain"}} alt="" />
      </h3>
    </div>
    <div>
      <h3 style={contentStyle}>
      <img src={banner4} style={{width:"100%",objectFit:"cover"}} alt="" />
      </h3>
    </div>
  </Carousel>
);
export default Banner;


