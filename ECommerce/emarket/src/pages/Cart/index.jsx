import React from 'react';
import { Header, Content } from 'antd/es/layout/layout';
import { Layout } from 'antd';
import CartItem from '../../components/CartItem/index';


const Cart = () => {
    return (
        <Layout>

            <Header>
                header
            </Header>

            <Content>
                <CartItem />
            </Content>
        </Layout>
    );
}

export default Cart;
