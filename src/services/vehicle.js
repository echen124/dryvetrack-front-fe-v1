import axios from 'axios'
const baseUrl = '/api'

const security = {
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${sessionStorage.getItem('bearer-token')}` }
}

const decodeVIN = (vin) => {
    const request = axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/${vin}?format=json`)
    return request.then(response => response.data)
}

const getAllVehicles = () => {
    const request = axios.get(`https://localhost:7152/api/Car/mycars`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const getVehicleByOwnerAndVin = (vin) => {
    const request = axios.get(`https://localhost:7152/api/Car/${vin}`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateVehicleMileage = (vin, newMileage) => {
    const request = axios.put(`https://localhost:7152/api/Car/updateMileage/${vin}`, newMileage, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}


const getInsuranceDetails = (vin) => {
    const request = axios.get(`https://localhost:7152/api/Insurance/getInsuranceByVin/${vin}`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const updateInsuranceDetails = (user, vin, obj) => {
    const request = axios.put(`https://localhost:7152/api/Insurance/updateInsuranceByVin/${vin}`, obj, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const addVehicleByOwner = (obj, id) => {
    const request = axios.post(`https://localhost:7152/api/Car/addCar`, obj, security)

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

const deleteVehicle = (id) => {
    const request = axios.delete(`https://localhost:7152/api/Car/delete/${id}`, security)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}



export { getAllVehicles, addVehicleByOwner, updateVehicle, deleteVehicle, decodeVIN, getVehicleByOwnerAndVin, updateInsuranceDetails, getInsuranceDetails, updateVehicleMileage}