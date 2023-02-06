import React from 'react';
import "./style.css";
import { InstagramFilled, FacebookFilled, TwitterSquareFilled } from '@ant-design/icons';
import { Row, Col, Space, Button } from 'antd';


const Navbar = ({nav}) => {
  return (
    <div>
      <Row>
                    <Col span={4}><h1 style={{ color: "black",fontStyle:"italic",fontWeight:600 }}>La Collection</h1></Col>
                    <Col span={16}><h1 style={{ color: "black", textAlign: "center" ,fontWeight:"bold"}}>{nav}</h1></Col>
                    <Col span={4}>
                        <Space size="small" style={{marginLeft:70}}>
                            <Button href='https://www.instagram.com/hm/' icon={<InstagramFilled />}></Button>
                            <Button href='https://www.facebook.com/hm/' icon={<FacebookFilled />}></Button>
                            <Button href='https://twitter.com/hm' icon={<TwitterSquareFilled />}></Button>
                        </Space>
                    </Col> 
                </Row>
    </div>
  );
}

export default Navbar;
