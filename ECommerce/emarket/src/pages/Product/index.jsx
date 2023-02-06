import React from 'react';
import "./style.css";
import { MyHeader, ShowProduct } from '../../components';
import { Layout } from 'antd';
const { Header, Content } = Layout;



const Product = () => {
  return (
    <Layout>
      <Header style={{backgroundColor:"white"}}>
<MyHeader />
      </Header>

      <Content>
        <ShowProduct />
      </Content>

    </Layout>


  );
}

export default Product;
