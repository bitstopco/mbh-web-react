import React from 'react';
import {API_ROOT} from '../constants';

export default {
    get(route, query) {
        return (
            fetch(route, {
                method: 'GET',
                crossDomain: false,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                data: JSON.stringify(query)
            })
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch(err => console.error(err))
        )
    },
    post(route, data) {
        return (
            fetch(route, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch(err => console.error(err))
        )
    }
}