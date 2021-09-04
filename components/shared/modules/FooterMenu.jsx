import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Logo from '~/components/elements/Logo';
import NavigationDefault from '~/components/shared/NavigationDefault'

import { Modal, Button, Form, Input, Select, Checkbox } from 'antd';
import Recaptcha from 'react-google-invisible-recaptcha';
const { TextArea } = Input;
const { Option } = Select;

const FooterWidgets = () => {
    const reRef = useRef();
    const [results, setResults] = useState({});
    const [modalVisible, setModalVisible] = useState(false)
    const [modalSuccessVisible, setModalSuccessVisible] = useState(false)
    const getContact = async () => {
        const res = await fetch('/api/contact')
        const json = await res.json()
        setResults(json.data)
    }

    useEffect(() => {
        getContact()
    }, [])

    const handleButtonClick = () => {
        setModalVisible(true)
    }

    const onFinish = async (values) => {
        const res = await fetch('/api/mail', {
            method: 'post',
            body: JSON.stringify(values)
        })
        if (res.status == 200) {
            setModalVisible(false)
            setModalSuccessVisible(true)
        } else {

        }

    };

    return (
        <div className="ps-footer__widgets">
            <div className="ps-container">
                <div className="header__left">
                    <Logo />
                    {/* <MenuCategoriesDropdown /> */}
                </div>
                <div className="header__center">
                    {/* <SearchHeader /> */}
                    <NavigationDefault />
                </div>
                <div className="header__right">
                    <div className="follow">
                        <div className="title">
                            Follow Us
                        </div>
                        <a href={results.instagram} className="header__right__list-icons">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                        </a>
                        <a href={results.facebook} className="header__right__list-icons">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                        </a>
                        <a href={results.linkedin} className="header__right__list-icons">
                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                        </a>
                    </div>

                    <button className="ps-btn" onClick={handleButtonClick}>
                        Contact Us
                    </button>
                </div>
            </div>
            <Modal
                centered
                visible={modalVisible}
                onCancel={() => {
                    setModalVisible(false)
                }}
                width={1000}
                footer={[
                    <div className="ant-footer__custom">
                        Speak to us today at <phone>0412 665 967</phone>
                    </div>
                ]}
            >
                <div className="title">
                    <h2>Contact Us</h2>
                    <p>Fill out the form and we'll be in touch as soon as possible</p>
                </div>
                <div className="form">
                    <Form layout="vertical" onFinish={onFinish}>
                        <Recaptcha
                            sitekey='6Lev9jAcAAAAAGeZVQ4hsFLPXe88UNyvDUHLciz2'
                            ref={reRef}
                            onResolved={() => console.log('Human detected.')}
                        />
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Item
                                    label="First Name"
                                    name="firstname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your first name!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="First Name" />
                                </Form.Item>
                            </div>
                            <div className="col-md-6">
                                <Form.Item
                                    label="Last Name"
                                    name="lastname"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your last name!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Last Name" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            type: "email",
                                            message: 'Please input your email!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="Ex: abc@gmail.com" />
                                </Form.Item>
                            </div>
                            <div className="col-md-6">
                                <Form.Item
                                    label="Phone Number"
                                    name="phonenumber"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your phone number!',
                                        },
                                    ]}
                                >
                                    <Input placeholder="(+x) 0000 0000" />
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Item
                                    label="Your Message"
                                    name="message"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your message!',
                                        },
                                    ]}
                                >
                                    <TextArea
                                        rows={4}
                                        placeholder="0 of 1000 max characters"
                                        maxLength={1000}
                                    />
                                </Form.Item>
                            </div>
                            <div className="col-md-6">
                                <Form.Item
                                    label="I'm Interested In"
                                    name="interested"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your interesting!',
                                        },
                                    ]}
                                >
                                    <Select >
                                        <Option key="Purchasing a first home">Purchasing a first home</Option>
                                        <Option key="Purchasing an investment">Purchasing an investment</Option>
                                        <Option key="Purchasing a commercial property">Purchasing a commercial property</Option>
                                        <Option key="SMSF investment">SMSF investment</Option>
                                        <Option key="Other">Other</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-10 d-flex align-items-center">
                                <Form.Item name="remember" valuePropName="checked" className="checkbox">
                                    <Checkbox >Keep me informed on good property deals</Checkbox>
                                </Form.Item>

                            </div>
                            <div className="col-md-2 d-flex justify-content-end">

                                <button className="ps-btn" type="submit" >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Modal>

            <Modal
                centered
                visible={modalSuccessVisible}
                onCancel={() => {
                    setModalVisible(false)
                }}
                width={700}
                footer={[
                    <button className="ps-btn" onClick={() => {
                        setModalSuccessVisible(false)
                    }}>
                        OK
                    </button>
                ]}
                className="modal-success"
            >
                <div className="modal-success__icon">
                    <i className="icon-hourglass icon"></i>
                </div>

                <div className="title">
                    <h2>Thank you</h2>
                    <p>Please wait, we'll be in touch as soon as possible</p>
                </div>
            </Modal>
        </div>
    )
};

export default FooterWidgets;
