import axios from 'axios'
const baseUrl = '/api'

const security = {
    headers: { 'x-auth-token': sessionStorage.getItem('x-auth-token') }
}

const decodeVIN = (vin) => {
    const request = axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
    return request.then(response => response.data)
}

const getAllVehicles = (id) => {
    const request = axios.get(`https://localhost:7298/api/Vehicle/get-vehicles-by-owner/${id}`, {
        headers: {
            'x-auth-token': sessionStorage.getItem('x-auth-token')
        }
    })

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const getVehicleByOwnerAndVin = (user, vin) => {
    const request = axios.get(`https://localhost:7298/api/Vehicle/get-vehicle-by-owner-vin/${user}/${vin}`)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const getInsuranceDetails = (user, vin) => {
    const request = axios.get(`https://localhost:7298/api/Insurance/get-insurance-by-vehicle-owner/${user}/${vin}`)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const addInsuranceDetails = (user, vin, obj) => {
    const request = axios.post(`https://localhost:7298/api/Insurance/add-insurance-by-vehicle-owner/${user}/${vin}`, obj)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const addVehicleByOwner = (obj, id) => {
    const request = axios.post(`https://localhost:7298/api/Vehicle/add-vehicle-by-owner/${id}`, obj, security)

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



export { getAllVehicles, addVehicleByOwner, updateVehicle, deleteVehicle, decodeVIN, getVehicleByOwnerAndVin, addInsuranceDetails, getInsuranceDetails }