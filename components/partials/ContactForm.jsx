import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { notification } from 'antd';

const modalNotification = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 3,
    });
};

const { TextArea } = Input;

const ContactForm =  () => {
    const onFinish =  async (values) => {
        
        const res = await fetch('/api/mailer', {
            method: 'post',
            body: JSON.stringify(values)
        })
        if (res.status == 200) {
            modalNotification('success', "Thank you!!", "We recived you massage")
        } else {
            modalNotification('error', "Oppp!!", "Sorry!! Something is wrong")
        }
    }

    return (<div className="ps-contact-form">
        <div className="container">
            <h3>Get In Touch</h3>
            <Form
                name="normal_login"
                className="login-form"
                onFinish={onFinish}
            >
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Please input your Name!' }]}
                        >
                            <Input size="large" placeholder="Name *" />
                        </Form.Item>
                    </div>
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your Email!' }]}
                        >
                            <Input size="large" placeholder="Email *" />
                        </Form.Item>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Form.Item
                            name="subject"
                            rules={[{ required: true, message: 'Please input your Subject!' }]}
                        >
                            <Input size="large" placeholder="Subject *" />
                        </Form.Item>
                    </div>
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <Form.Item
                            name="message"
                            rules={[{ required: true, message: 'Please input your Message!' }]}
                        >
                            <TextArea rows={6} placeholder="Message *" />
                        </Form.Item>
                    </div>

                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 text-align-center">
                        <button type="submit" htmlType="submit" className="ps-btn ps-btn--lg">
                            Submit
                        </button>
                    </div>
                </div>
            </Form>
            {/* <form className="ps-form--contact-us" action="/" method="get"> 
             <h3>Get In Touch</h3>
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Name *"
                        />
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Email *"
                        />
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Subject *"
                        />
                    </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                    <div className="form-group">
                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Message"></textarea>
                    </div>
                </div>
            </div>
            <div className="form-group submit">
                <button className="ps-btn">Send message</button>
            </div>
        </form> */}
        </div>
    </div>)
};

export default ContactForm;
