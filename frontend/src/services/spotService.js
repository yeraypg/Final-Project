/* eslint-disable */

import apiClient from './index'

async function getAllSpots(id) {
    const response = await apiClient.get('spot/', {
        headers: {
            'token': localStorage.token
        }, id
    })
    return response.data
}

async function getOneSpot(id) {
    const response = await apiClient.get('spot/' + id, {
        headers: {
            'token': localStorage.token
        }
    })
    return response.data
}

async function updateOneSpot(data) {
    const response = await apiClient.put('spot/' + data.id, data, {
        headers: {
            'token': localStorage.token
        }
    })
}

async function createSpot(data) {
    const response = await apiClient.post('spot/', data, {
        headers: {
            'token': localStorage.token
        }
    })
}

async function deleteSpot(data) {
    const response = await apiClient.delete('spot/' + data, {
        headers: {
            'token': localStorage.token
        }
    })
}


export {
    getAllSpots,
    getOneSpot,
    updateOneSpot,
    createSpot,
    deleteSpot
}
