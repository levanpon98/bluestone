import React, {useState} from 'react';
import Image from 'next/image'
import { Modal, Button, Form, Input, Select, Checkbox } from 'antd';
const { TextArea } = Input;
const { Option } = Select;

const FooterContact = () => {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalSuccessVisible, setModalSuccessVisible] = useState(false)

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
        <div
            className="ps-vendor-footer "
        >
            <div className="ps-container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                        <img src="/static/img/bg/vendor.jpg" className={'image'} />
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 vendor-footer__left">
                        <div className="title">
                            <p>
                                Always Find The Property <br />You're Looking For
                            </p>
                        </div>
                        <div className="button">
                            <button className="ps-btn" onClick={() => {
                                setModalVisible(true)
                            }}>
                                Request A Consultation
                            </button>
                        </div>

                    </div>
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
                                        <Option key="Buyers Agents">Buyers Agents</Option>
                                        <Option key="Property Management">Property Management</Option>
                                        <Option key="Vendor Avocacy">Vendor Avocacy</Option>
                                    </Select>
                                </Form.Item>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-md-10 d-flex align-items-center">
                                <Form.Item name="remember" valuePropName="checked" className="checkbox">
                                    <Checkbox >Yes please, subscribe me to weekly property market intelligence and insights.</Checkbox>
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
}


export default FooterContact;
