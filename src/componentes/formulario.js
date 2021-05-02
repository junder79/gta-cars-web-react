import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, notification, Row, Col, Card } from 'antd';
import axios from 'axios';
function Formulario() {


    const [categoria, setCategoria] = useState('');
    const [resistencia, setResistencia] = useState('');
    const [velocidad, setVelocidad] = useState('');
    const [tipo, setTipo] = useState('');
    const abrirNotification = (mensaje) => {
        notification.open({
            message: mensaje,
        });
    };
    const onFinish = (value) => {
        console.log('Success:', value);
        const formData = new FormData();
        formData.append('nombre', value.nombre);
        formData.append('imagen', value.imagen);
        formData.append('descripcion', value.descripcion);
        formData.append('categoria', categoria);
        formData.append('resistencia', resistencia);
        formData.append('marca', value.marca);
        formData.append('velocidad', velocidad);
        formData.append('tipo', tipo);

        axios({
            method: 'POST',
            url: 'http://gtavehicles.000webhostapp.com/rest/public/api/nuevovehiculo',
            data: formData,
            headers: { 'Content-Type': 'multipart/form-data' }
        })
            .then(function (response) {
                //handle success
                console.log(response);
                abrirNotification('Vehiculo Agregado');
            })
            .catch(function (response) {
                //handle error
                console.log(response);
                abrirNotification('Error al agregar');
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    const handleChange = (value) => {
        console.log("es " + value);

    }

    return (
        <>
            <Row>
                <Col span={24}>
                    <div className="site-card-border-less-wrapper">
                        <Card title="Nuevo Vehiculo" bordered={false} style={{ width: 300 }}>

                            <Form

                                name="formulario"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                            >
                                <Form.Item
                                    label="Nombre Vehiculo"
                                    name="nombre"
                                    rules={[{ required: true, message: 'Ingresa Nombre' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Imagen"
                                    name="imagen"
                                    rules={[{ required: true, message: 'Ingrese Imagen' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Descripción"
                                    name="descripcion"
                                    rules={[{ required: true, message: 'Ingrese Descripción' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Categoria">
                                    <Select onChange={(value) => setCategoria(value)} >
                                        <Select.Option value="1">Terrestre</Select.Option>
                                        <Select.Option value="2">Marítimo</Select.Option>
                                        <Select.Option value="3">Aereo</Select.Option>
                                        <Select.Option value="4">Aereo Helicóptero</Select.Option>
                                        <Select.Option value="5">Extraños</Select.Option>
                                        <Select.Option value="6">Motocicletas</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Resistencia">
                                    <Select onChange={(value) => setResistencia(value)}>
                                        <Select.Option value="1">Mala</Select.Option>
                                        <Select.Option value="2">Buena</Select.Option>
                                        <Select.Option value="3">Muy Buena</Select.Option>
                                        <Select.Option value="4">Aceptable</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item
                                    label="Marca"
                                    name="marca"
                                    rules={[{ required: true, message: 'Ingrese Marca' }]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item label="Velocidad" >
                                    <Select onChange={(value) => setVelocidad(value)}>
                                        <Select.Option value="1">Mala</Select.Option>
                                        <Select.Option value="2">Buena</Select.Option>
                                        <Select.Option value="3">Muy Mala</Select.Option>
                                        <Select.Option value="4">Muy Bueno</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item label="Tipo">
                                    <Select onChange={(value) => setTipo(value)}>
                                        <Select.Option value="1">Super</Select.Option>
                                        <Select.Option value="2">Deportivo</Select.Option>
                                        <Select.Option value="3">Clásico</Select.Option>
                                        <Select.Option value="4">No Aplica</Select.Option>
                                        <Select.Option value="5">Muscle</Select.Option>
                                        <Select.Option value="6">Compacto</Select.Option>
                                        <Select.Option value="7">Race Car</Select.Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item >
                                    <Button type="primary" htmlType="submit">
                                        Enviar
        </Button>
                                </Form.Item>
                            </Form>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Formulario;