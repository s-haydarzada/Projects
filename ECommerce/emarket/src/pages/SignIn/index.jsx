import React from 'react';
import "./style.css";
import { Login, Navbar } from '../../components';
import { Layout } from 'antd';
const { Header, Content } = Layout;



const SignIn = () => {
    return (
        <Layout>
            <Header style={{ backgroundColor: "gray" }}>
                <Navbar nav="Login" />
            </Header>

            <Content style={{ marginTop: 30, height: 500 }}>
                <Login />
            </Content>


        </Layout >
    )
};

export default SignIn;
