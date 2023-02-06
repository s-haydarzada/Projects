import React from 'react';
import "./style.css";
import { Row, Col, Tooltip, Button, Form, Input, Space } from 'antd';
import { contactUs } from '../../images';
import { PhoneFilled, MailFilled, UserOutlined, MailOutlined } from '@ant-design/icons';
import { ImLocation2 } from "react-icons/im";
import { FiPhone } from "react-icons/fi";


const ContactUs = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
        <>
            <div>
                <Row style={{ marginTop: 30 }}>
                    <Col span={4}></Col>
                    <Col span={16} style={{ textAlign: "center", fontSize: 20 }}>
                        <h1 style={{ fontSize: 50 }}>Have Some Questions?</h1>
                        <p>Thank you for your interest in our services.Please fill out the form below or e-mail us at <span style={{ color: "blue" }}>LaCollection.@mail.com</span> and we will get baack to you promptly regarding your request.</p>
                    </Col>
                    <Col span={4}></Col>

                </Row>
                <Row>
                    <Col span={6}></Col>
                    <Col span={6} style={{backgroundColor:"white",borderRadius:7}} >
                        <img src={contactUs} alt="ContactUs" style={{ widht: 400, height: 300, paddingTop: 30, borderRadius: 5 }} />
                        <p>
                            <Tooltip title="phone">
                                <Button type="link" shape="circle" icon={<PhoneFilled size={20} />} /> +99450 555-55-55
                            </Tooltip>
                        </p>
                        <p>
                            <Tooltip title="email">
                                <Button type="link" shape="circle" icon={<MailFilled size={20} />} />LaCollection.@mail.com
                            </Tooltip>
                        </p>
                        <p>
                            <Tooltip title="address">
                                <Button type="link" shape="circle" icon={<ImLocation2 size={20} />} />Baki şəh.,Nəsimi rayonu
                            </Tooltip>
                        </p>
                    </Col>

                    <Col span={7}>
                        <div className='form'>
                            <Form
                                name="normal_login"
                                className="login-form"
                                initialValues={{
                                    remember: true,
                                }}
                                onFinish={onFinish}
                            >
                                <Form.Item
                                    name="username"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Username!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                                </Form.Item>

                                <Form.Item
                                    name="lastname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your Lastname!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Lastname" />
                                </Form.Item>

                                <Form.Item
                                    name="phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<FiPhone className="site-form-item-icon" />} placeholder="Phone" />

                                </Form.Item>

                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                                </Form.Item>


                                <Form.Item
                                    name="text"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your E-mail!',
                                        },
                                    ]}
                                >
                                    <Input.TextArea maxLength={100} placeholder="Message" />
                                </Form.Item>

                                <Space
                                    direction="vertical"
                                    style={{
                                        width: '100%',
                                    }}
                                >
                                    <Button type="primary" block>Send Message</Button>
                                </Space>
                            </Form>
                        </div>
                    </Col>

                    <Col span={5}></Col>

                </Row>
            </div>
        </>
    );
}

export default ContactUs;
