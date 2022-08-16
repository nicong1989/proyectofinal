import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Listadeproductos = () => {

    const URL = "http://localhost:3002/Productos"

    const getDATA = async () => {
        const response = axios.get(URL);
        return response
    }


    const [lista, setLista] = useState([])




    useEffect(() => {

        getDATA().then((response) => {
            setLista(response.data)
        })




    }, [])



    return (

        <div>
            {
                lista.map(function(Productos){
                    return <h2>{Productos.Marca}</h2>;
                })
            }



        </div>
    )
}

export default Listadeproductos