import React, { useEffect, useState } from 'react';
import { Table, Skeleton, notification, Space, Button } from 'antd';
import axios from 'axios';
import Form from 'antd/lib/form/Form';

function Listar() {
    useEffect(() => {
        getAllVehiculos();
    }, []);

    const getAllVehiculos = () => {
        setEstadoCarga(true);
        axios.get('https://gtavehicles.000webhostapp.com/rest/public/api/all')
            .then(function (response) {
                console.log(response);
                setDataVehiculos(response.data);
                setEstadoCarga(false);
            })
            .catch(function (error) {
                console.log(error);
                setEstadoCarga(false);
                abrirNotification('Error cargar.');
            })
    }
    const eliminarVehiculo = (idVehiculo) => {

        const formData = new FormData();
        formData.append('id', idVehiculo);

        axios.post('https://gtavehicles.000webhostapp.com/rest/public/api/eliminar', formData)
            .then(function (response) {
                console.log("respuesta " + response);
                abrirNotification('Eliminado');
                getAllVehiculos();
            })
            .catch(function (error) {
                console.log(error);

                abrirNotification('Error eliminar');
            })
    }
    const [dataVehiculos, setDataVehiculos] = useState([]);
    const [estadoCarga, setEstadoCarga] = useState(false);

    const abrirNotification = (mensaje) => {
        notification.open({
            message: mensaje,
        });
    };


    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'nombre_vehiculo',
            key: 'nombre_vehiculo',
        },
        {
            title: 'Imagen',
            dataIndex: 'imagen_vehiculo',
            key: 'imagen_vehiculo',
        },
        {
            title: 'Categoria',
            dataIndex: 'nombre_categoria',
            key: 'nombre_categoria',
        },
        {
            title: 'Resistencia',
            dataIndex: 'resistencia',
            key: 'resistencia',
        },
        {
            title: 'Marca',
            dataIndex: 'marca',
            key: 'marca',
        },
        {
            title: 'Velocidad',
            dataIndex: 'velocidad',
            key: 'velocidad',
        },
        {
            title: 'Tipo',
            dataIndex: 'nombre_tipo_vehiculo',
            key: 'nombre_tipo_vehiculo',
        },

        {
            title: 'Acción',
            key: 'acccion',
            render: (record) => (
                <Space size="middle">

                    <Button type="primary" onClick={() => eliminarVehiculo(record.idvehiculo)} shape="round" >
                        Eliminar
        </Button>
                </Space>
            ),
        },


    ];

    return (
        <>
            {
                estadoCarga ? <Skeleton /> : <Table columns={columns} dataSource={dataVehiculos} />
            }
        </>

    )
}

export default Listar;