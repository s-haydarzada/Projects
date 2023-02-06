import React from 'react';
import "./style.css";
import {login} from '../../images';
import { Navbar, Register } from '../../components';
import { Layout,Row,Col } from 'antd';
const { Header, Content } = Layout;


const SignUp = () => {
    return (
        <Layout className='Layout'>

            <Header style={{ backgroundColor: "gray", color: "black" }}>
                <Navbar nav="Register" />
            </Header>
            <Content className='Content'>
                <Row gutter={16} >
                    <Col span={12}>
                        <img width={"100%"} src={login} alt="login" />
                    </Col>
                    <Col span={12}>
                        <Register/>
                    </Col>
                </Row>
            </Content>
        </Layout>

    )
}

export default SignUp;
