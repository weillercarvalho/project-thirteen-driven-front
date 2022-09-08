import React from "react";
import axios from "axios";

const BASE_URL = `http://localhost:5000`;

function singin(body) {
    const promisse = axios.post(`${BASE_URL}/singin`, body);
    return promisse;
}

function singup(body) {
    const promisse = axios.post(`${BASE_URL}/singup`, body);
    return promisse;
}

function addvalue(body) {
    const promisse = axios.post(`${BASE_URL}/addvalue`, body);
    return promisse;
}

function removevalue(body) {
    const promisse = axios.post(`${BASE_URL}/removevalue`, body);
    return promisse;
}

function result(body) {
    const promisse = axios.get(`${BASE_URL}/result`, body);
    return promisse;
}

export {singin, singup, addvalue, removevalue}