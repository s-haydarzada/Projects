import React from 'react';
import {useSelector} from 'react-redux';
import { LoginOutlined, UserAddOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Layout, Col, Row, Menu, Button, Space } from 'antd';
import { NavLink } from 'react-router-dom';
const { Header } = Layout;


const items = [
    {
        label: (
            <NavLink to="/" >
       Home
      </NavLink>
        ),
        key: 1,
    },
    {
        label:(
            <NavLink to="/product" >
       Products 
       </NavLink>
        ),
        key: 2,
    },
    {
        label:(
            <NavLink to="/about" >
       About
      </NavLink>
        ) ,
        key: 3,
    },
    {
        label: (
            <NavLink to="/contact" >
       Contact
      </NavLink>
        ),
        key: 4,
    },

]

const MyHeader = () => {

    const state = useSelector((state)=>state.addItem);

  return (
    <div>
      <Header style={{ backgroundColor: "white" }}>
                <Row>
                    <Col span={6} ><h1 style={{ color: "black", fontWeight: "bold" }}>LA COLLECTION</h1></Col>
                    <Col span={12} style={{ paddingLeft: 60 }}>
                        <Menu style={{ fontSize: 18 }} mode="horizontal" items={items} />
                    </Col>
                    <Col span={6}>
                        <Space direction="vertical">
                            <Space size="small" style={{marginLeft:20}}>

                               <Button href='/signin' type="primary" icon={<LoginOutlined />}>
                                Login
                                </Button>
                                <Button href='/signup' type="primary" icon={<UserAddOutlined />}>
                                    Register
                                </Button>
                                <Button href='./cart' type="primary" icon={<ShoppingCartOutlined />}>
                                    Cart ({state.length})
                                </Button>
                            </Space>

                        </Space>
                    </Col>


                </Row>
            </Header>
    </div>
  );
}

export default MyHeader;
