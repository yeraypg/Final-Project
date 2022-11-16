/* eslint-disable */

import apiClient from './index'

async function getAllExamples(data) {
    const response = await apiClient.get('example/', {
        headers: {
            'token': localStorage.token,
            'spotid': data.spotId,
            'flopid': data.flopId
        }, data
    })
    return response.data
}

async function updateOneExample(data) {
    const response = await apiClient.patch('example/' + data.id, data, {
        headers: {
            'token': localStorage.token
        }
    })
}

async function createExample(data) {
    console.log(data)
    const response = await apiClient.post('example/', data, {
        headers: {
            'token': localStorage.token
        }
    })
}

async function deleteExample(data) {
    const response = await apiClient.patch('example/delete/' + data.flopId, { spot: data.spotId }, {
        headers: {
            'token': localStorage.token
        }
    })
}

export {
    getAllExamples,
    updateOneExample,
    createExample,
    deleteExample
}
