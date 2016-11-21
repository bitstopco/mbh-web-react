import React from 'react';
import {API_ROOT} from '../constants';

export default {
    get(route, query) {
        return (
            fetch(route, {
                method: 'GET',
                crossDomain: false,
                xhrFields: {
                    withCredentials: true
                },
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
                xhrFields: {
                    withCredentials: true
                },
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
                credentials: 'include'
            })
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch(err => console.error(err))
        )
    }
}