import React, { Component, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import {  login } from '~/store/auth/action';
import { Form, Input, notification, Checkbox } from 'antd';
import { connect, useDispatch, useSelector } from 'react-redux';


const Login = (props) => {
    const auth = useSelector(state => state.auth)
    const [form] = Form.useForm();
    const dispatch = useDispatch();
   
    const handleLoginSubmit = (values) => {
        dispatch(login({
            email: values.email,
            password: values.password,
            route: Router
        }));
    };

    
    return (
        <div className="ps-my-account">
            <div className="container">
                <Form
                    className="ps-form--account"
                    onFinish={handleLoginSubmit}>
                    <div className="ps-tab active" id="sign-in">
                        <div className="ps-form__content">
                            <div className="form-group">
                                <Form.Item
                                    name="email"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your email!',
                                        },
                                    ]}
                                    >
                                    <Input
                                        className="form-control"
                                        type="text"
                                        placeholder="Email address"
                                        
                                    />
                                </Form.Item>
                            </div>
                            <div className="form-group form-forgot">
                                <Form.Item
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password!',
                                        },
                                    ]}
                                    // initialValue={password}
                                    >
                                    <Input
                                        className="form-control"
                                        type="password"
                                        placeholder="Password..."
                                        
                                    />
                                </Form.Item>
                            </div>
                            <div className="submit">
                                <button
                                    type="submit"
                                    className="ps-btn ps-btn--fullwidth">
                                    Login
                                </button>
                            </div>
                        </div>
                        </div>
                </Form>
            </div>
        </div>
    )
}

export default Login;
