import axios from 'axios';

const url = 'http://localhost:8000';


export const authenticateLogin = async (user) => {
    try{
return await axios.post(`${url}/login`, user);

    } catch (error){
console.log('Error while calling login api', error);
    }
}


export const authenticatesSignup = async (user) => {
    try{
return await axios.post(`${url}/signup`, user);

    } catch (error){
console.log('Error while calling signup api', error);
    }
}

export const getProductById = async (id) => {
    try {
        return await axios.get(`${url}/product${id}`);
    } catch (error) {
        console.log('Errors', error);
    }
}


export const payUsingPaytm = async (data) => {
    try {
       let response = await axios.post(`${url}/payment`, data);
       return response.data;
    } catch (error) {
        console.log('Error ', error)
    }
}