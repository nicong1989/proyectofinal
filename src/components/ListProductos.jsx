import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardProductos from './CardProductos';





const ListProductos = () => {

    const URL = "http://localhost:3002/productos"

    const getData = async () => {
        const response = axios.get(URL);
        return response;
    }

    const [list, setList] = useState([]);



    useEffect(() => {

        getData().then((response) => {
            setList(response.data);
        })
    }, [])


    return (
        <>
            {
                list.map((productos, index) => (
                    <CardProductos
                        key={index}
                        productos={productos}

                    />
                ))
            }
        </>
    )
}

export default ListProductos
