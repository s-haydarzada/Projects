/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import "./style.css";
import { Button, Space, Row, Col, Card, Skeleton } from 'antd';
const { Meta } = Card;

const ShowProduct = () => {

  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;


  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        componentMounted = false;
      }
    }

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <Row style={{paddingTop:50,lineHeight:2}}>
          <Col span={6}>
            <Skeleton.Input active style={{height:350, width:250}} />
          </Col>
          <Col span={6}>
          <Skeleton.Input active style={{height:350, width:250}} />
          </Col>
          <Col span={6}>
          <Skeleton.Input active style={{height:350, width:250}} />
          </Col>
          <Col span={6}>
          <Skeleton.Input active style={{height:350, width:250}} />
          </Col>
        </Row>

      </>
    )
  };

  const filterProduct = (categ) => {
    const updatedList = data.filter((x) => x.category === categ);
    setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <Space size="small">
          <Button onClick={() => setFilter(data)}>All</Button>
          <Button onClick={() => filterProduct("men's clothing")}>Men's Clothing</Button>
          <Button onClick={() => filterProduct("women's clothing")}>Women's Clothing</Button>
          <Button onClick={() => filterProduct("jewelery")}>Jewellery</Button>
          <Button onClick={() => filterProduct("electronics")}>Electronic</Button>
        </Space>
        <div className='Card'>
          {
            filter.map((product) => {
              return (
                <>
                  <Space size="large">
                    <Card key={product.id}
                      hoverable
                      style={{
                        width: 240,
                      }}
                      cover={<img alt={product.title} src={product.image} height="250px" paddingTop="10px" />}
                    >
                      <Meta title={product.title.substring(0, 12)} rate={product.rating.rate} />
                      <p style={{ fontSize: 16, fontWeight: 700 }}>${product.price}</p>
                      <Button href={`/product/${product.id}`} type="primary" block>
                        Buy Now
                      </Button>
                    </Card>

                  </Space>

                </>
              )
            })
          }
        </div>
      </>
    )
  }

  return (
    <div>
      <Row>
        <Col span={24}><h1 style={{ textAlign: "center", fontSize: 50, paddingTop: 20 }}>Latest Products</h1></Col>
      </Row>
      <hr />
      <Row>
        <Col align="center" span={24}>
          {
            loading ? <Loading /> : <ShowProducts />
          }
        </Col>
      </Row>

    </div>);
}

export default ShowProduct;
