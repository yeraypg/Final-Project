/* eslint-disable */

import apiClient from './index'

async function getAllFlops(spotId) {
    const response = await apiClient.get('flop/', {
        headers: {
            'token': localStorage.token,
            'spotid': spotId
        }
    })
    return response.data
}

async function getOneFlop(data) {
    const response = await apiClient.get('flop/' + data.flopId, {
        headers: {
            'token': localStorage.token,
            'spotid': data.spotId
        }
    })
    return response.data
}

async function updateOneFlop(data) {
    const response = await apiClient.patch('flop/' + data.id, data, {
        headers: {
            'token': localStorage.token
        }
    })
}

async function createFlop(data) {
    const response = await apiClient.post('flop/', data, {
        headers: {
            'token': localStorage.token
        }
    })
}

async function deleteFlop(data) {
    const response = await apiClient.patch('flop/delete/' + data.flopId, { spot: data.spotId }, {
        headers: {
            'token': localStorage.token
        }
    })
}


export {
    getAllFlops,
    getOneFlop,
    updateOneFlop,
    createFlop,
    deleteFlop
}
