import axios from 'axios'
const baseUrl = 'http://localhost:3000/auth'

const login = (obj) => {
    const request = axios.post(baseUrl + "/login", obj)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

const signup = (obj) => {
    const request = axios.post(baseUrl + "/signup", obj)

    if (request.catch(e => e.response.data.length > 0)) {
        return request.catch(e => e.response.data);
    } else {
        return request.then(response => response.data);
    }
}

export { login, signup }