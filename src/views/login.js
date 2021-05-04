import React from 'react';
import { Form, Input, Button, Checkbox, Layout, Row } from 'antd';
import axios from 'axios';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const { Header, Footer, Sider, Content } = Layout;

function Login() {


    const onFinish = (values) => {
        let formData = new FormData();
        formData.append('username', values.username);
        formData.append('password', values.password);

        console.log('Success:', values);
        axios.post('/url', formData)
            .then(function (response) {
                console.log(response);
                localStorage.setItem('usuario', 'junder');
                localStorage.setItem('estadoLogin', true);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Layout>
            <Row type="flex" justify="center" align="middle" style={{ minHeight: '100vh' }}>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Usuario"
                        name="username"
                        labelCol={{ span: 24 }}
                        wrapperCol = {{ span:24 }}
                        rules={[
                            {
                                required: true,
                                message: 'Ingrese Nombre de Usuario',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Contraseña"
                        name="password"
                        labelCol={{ span: 24 }}
                        wrapperCol = {{ span:24 }}
                        rules={[
                            {
                                required: true,
                                message: 'Ingrese Password',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>



                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            Entrar
          </Button>
                    </Form.Item>
                </Form>
            </Row>
        </Layout>

    )

}

export default Login;