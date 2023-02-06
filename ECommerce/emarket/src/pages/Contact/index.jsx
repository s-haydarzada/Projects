import { Layout } from 'antd';
import { Header, Content } from 'antd/es/layout/layout';
import React from 'react';
import { MyHeader,ContactUs } from '../../components';
import "./style.css";

const Contact = () => {
  return (
    <Layout className='ContactUs'>
      <Header style={{backgroundColor:"white"}}>
        <MyHeader/>
      </Header>

      <Content>
        <ContactUs/>
      </Content>

    
    </Layout>
  );
}

export default Contact;
