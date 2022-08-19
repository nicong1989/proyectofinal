import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Producto from './Producto';





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
        <div>
            {
                list.map((productos, index) => (
                    <Producto
                        key={index}
                        productos={productos}

                    />
                ))
            }
        </div>
    )
}

export default ListProductos
