import axios from 'axios'
const baseUrl = '/auth'

const login = (obj) => {
    const request = axios.post("https://localhost:7152/api/Auth/login", obj)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const signup = (obj) => {
    const request = axios.post("https://localhost:7298/api/Auth/add-user", obj)
    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

export { login, signup }