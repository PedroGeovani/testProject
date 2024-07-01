import axios from "axios";

const api = axios.create({
    baseURL : 'https://6679b7a718a459f639512c41.mockapi.io/agenda/v1',
})
export default api;