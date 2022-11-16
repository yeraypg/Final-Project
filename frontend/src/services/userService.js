/* eslint-disable */

import apiClient from './index'

async function login(data) {
    const response = await apiClient.post('user/login', data)
    return response.data
}

async function signUp(data) {
    const response = await apiClient.post('user/signUp', data)
    return response.data
}

export {
    login,
    signUp
}
