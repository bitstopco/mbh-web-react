import React from 'react';
import {API_ROOT} from '../constants';

export default {
    get(route, query) {
        return (
            fetch(route, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Access-Control-Allow-Origin': '*'
                },
                data: JSON.stringify(query)
            })
            .then(res => {
                console.log('res');

                console.log(res);
                res.json();
            })
            .then(res => {
                console.log('res');

                console.log(res);
                return res;
            })
            .catch(err => {
                throw err;
            })
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
    },
    getExt(route, query) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', route);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('success')

                    console.log(xhr.responseText)
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    console.log('fail')
                    console.log(xhr.status)
                    reject(xhr.status)
                }
            };
            xhr.send();
        })
    },
    postExt(route, params) {
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open('POST', route, true);
            xhr.onload = function() {
                if (xhr.status === 200) {
                    console.log('success')

                    console.log(xhr.responseText)
                    resolve(JSON.parse(xhr.responseText))
                }
                else {
                    console.log('fail')
                    console.log(xhr.status)
                    reject(xhr.status)
                }
            };
            xhr.onerror = function() {
                reject(xhr.status);
            }     
            xhr.send(params);
        })
    }
}