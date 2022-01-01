import axios from 'axios'
const baseUrl = 'http://localhost:3001/api'

const security = {
    headers: { 'x-auth-token': sessionStorage.getItem('x-auth-token') }
}

const decodeVIN = (vin) => {
    const request = axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
    return request.then(response => response.data)
}

const getAllVehicles = (id) => {
    const request = axios.get(baseUrl + '/vehicle-info', {
        headers: {
            'x-auth-token': sessionStorage.getItem('x-auth-token')
        },
        params: {
            'key': id
        }
    })

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const addVehicle = (obj, id) => {
    const request = axios.post(baseUrl + '/add-vehicle', {obj, id}, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateVehicle = (id, obj, userId) => {
    const request = axios.put(baseUrl + `/update-vehicle/${id}`, { obj, userId }, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const deleteVehicle = (userId, obj) => {
    const request = axios.put(baseUrl + '/delete-vehicle', { userId, obj }, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}



export { getAllVehicles, addVehicle, updateVehicle, deleteVehicle, decodeVIN }