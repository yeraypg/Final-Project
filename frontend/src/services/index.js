/* eslint-disable */

import axios from 'axios'

export default axios.create({
    baseURL: 'https://postflopmanager.herokuapp.com/api/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        ContentType: 'application/json'
    }
})
