import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Select, notification, Row, Col, Card } from 'antd';
import axios from 'axios';
import '../assets/css/estilos.css';
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

            <div className="contenedor" >


                <Form

                    name="formulario"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Row >
                        <Col xs={24} sm={8}>

                            <Form.Item
                                label="Nombre Vehiculo"
                                name="nombre"
                                className="input-margin"
                                rules={[{ required: true, message: 'Ingresa Nombre' }]}
                                labelCol={{ span: 24 }}
                                wrapperCol = {{ span:24 }}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={8}>

                            <Form.Item
                                label="Imagen"
                                name="imagen"
                                className="input-margin"
                                labelCol={{ span: 24 }}
                                wrapperCol = {{ span:24 }}
                                rules={[{ required: true, message: 'Ingrese Imagen' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Form.Item
                                label="Descripción"
                                name="descripcion"
                                className="input-margin"
                                labelCol={{ span: 24 }}
                                wrapperCol = {{ span:24 }}
                                rules={[{ required: true, message: 'Ingrese Descripción' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>



                    <Row>
                        <Col xs={24} sm={8}>
                            <Form.Item label="Categoria"  className="input-margin"   labelCol={{ span: 24 }} wrapperCol = {{ span:24 }}>
                                <Select  onChange={(value) => setCategoria(value)} >
                                    <Select.Option value="1">Terrestre</Select.Option>
                                    <Select.Option value="2">Marítimo</Select.Option>
                                    <Select.Option value="3">Aereo</Select.Option>
                                    <Select.Option value="4">Aereo Helicóptero</Select.Option>
                                    <Select.Option value="5">Extraños</Select.Option>
                                    <Select.Option value="6">Motocicletas</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Form.Item label="Resistencia"  className="input-margin"   labelCol={{ span: 24 }}>
                                <Select onChange={(value) => setResistencia(value)}>
                                    <Select.Option value="1">Mala</Select.Option>
                                    <Select.Option value="2">Buena</Select.Option>
                                    <Select.Option value="3">Muy Buena</Select.Option>
                                    <Select.Option value="4">Aceptable</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Form.Item
                                label="Marca"
                                name="marca"
                                className="input-margin"
                                labelCol={{ span: 24 }}
                                rules={[{ required: true, message: 'Ingrese Marca' }]}
                            >
                                <Input />
                            </Form.Item>
                        </Col>

                    </Row>
                    <Row>
                        <Col xs={24} sm={8}>
                            <Form.Item label="Velocidad"  className="input-margin"   labelCol={{ span: 24 }} >
                                <Select onChange={(value) => setVelocidad(value)}>
                                    <Select.Option value="1">Mala</Select.Option>
                                    <Select.Option value="2">Buena</Select.Option>
                                    <Select.Option value="3">Muy Mala</Select.Option>
                                    <Select.Option value="4">Muy Bueno</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Form.Item label="Tipo"   className="input-margin"  labelCol={{ span: 24 }}>
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
                        </Col>

                    </Row>


                    <Form.Item >
                        <Button type="primary" className="color-boton" shape="round" htmlType="submit">
                            Enviar
        </Button>
                    </Form.Item>
                </Form>

            </div>

        </>
    )
}

export default Formulario;