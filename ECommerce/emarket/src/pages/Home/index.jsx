import React from 'react';
import "./style.css";
import { ShowProduct, MyHeader } from '../../components';
import { Layout } from 'antd';
import Banner from '../../components/Banner';
const { Header, Content, Footer } = Layout;





const Home = () => {
    return (
        <Layout>
            <Header style={{ backgroundColor: "white" }}>
                <MyHeader />
            </Header>

            <Content style={{ marginTop: 10 }}>

                <Banner />

                <ShowProduct />
            </Content>

            <Footer>
                Footer
            </Footer>
        </Layout>
    );
}

export default Home;
