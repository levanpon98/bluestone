import React, { useEffect, useState } from 'react';
import { DatePicker, Form, Input, Radio, notification } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const { TextArea } = Input;
const modalNotification = (type, message, desc) => {
    notification[type]({
        message: message,
        description: desc,
        duration: 3,
    });
};

const FormChangeContact = ({ }) => {
    const [form] = Form.useForm();
    const [results, setResults] = useState({});

    const getContact = async () => {
        const res = await fetch('/api/aboutus')
        const json = await res.json()
        form.setFieldsValue({
            aboutus: json.data.service_1,
        });
    }

    const handleSubmit = async (values) => {
        const res = await fetch('/api/aboutus', {
            method: 'post',
            body: JSON.stringify(values)
        })

        modalNotification('success', "Change About Us Successfully!!!", "")
        
    };

    useEffect(() => {
        getContact()
    }, [])


    return (

        <Form
            className="ps-form--account-setting"
            onFinish={handleSubmit}
            form={form}>

            <div className="ps-form__content">
                <div className="form-group">

                    <Form.Item
                        name="aboutus"
                    >
                        <TextArea
                            className="form-control"
                            rows={6}
                            placeholder="Service 1"
                        />
                    </Form.Item>
                </div>
                <div className="form-group">
                    <button className="ps-btn">Update profile</button>
                </div>
            </div>
        </Form>
    );
};

export default FormChangeContact;
