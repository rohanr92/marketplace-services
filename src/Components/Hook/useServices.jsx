import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useServices = () => {

    let [services, setServices] = useState([]);
    let [errors, setErrors] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(()=>{

        axios('../data.json')
        .then(response => {
                setServices(response.data);
            })
        .catch((error) => {
            setErrors(error.message)
        })
        .finally(() => {
              
                setLoading(false);
            });

            



    }, [])

    return { services, loading, errors };
};

export default useServices;