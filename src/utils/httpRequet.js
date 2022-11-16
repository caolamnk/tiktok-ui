import axios from 'axios';

console.log(process.env);

const httpRequet = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = { }) => {
    const response = await httpRequet.get(path, options);
    return response.data;
}

export default httpRequet;
