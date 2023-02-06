/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from 'react';
import "./style.css";
import {Row,Col,Button,Space} from 'antd';
import { useSelector,useDispatch } from 'react-redux';
import { delItem } from '../../Redux/actions';
import addItem from './../../Redux/reducers/addItem';



const CartItem = () => {

  const state= useSelector((state)=>state.addItems)
const dispatch=useDispatch();

const handleClose=(item)=>{
  dispatch(delItem(item))
}

const cartItems=(item)=>{
  return(
<div>
  <Row key={item.id}>
    <Col span={10}>
      <img src={item.image} alt={item.title} />
    </Col>
    <Col span={10}>
      <p>{item.title}</p>
    </Col>
    <Col span={4}>
    <button onClick={handleClose}>X</button>
    </Col>

  </Row>
</div>
  )
}
  
  
  return (
  <>
  {state.length!==0 && state.map(cartItems)}
  </>
  );
}



export default CartItem;
