import config from '../config/config';
const axios = require('axios').default;
import AxiosService from "./axios-service";


export default class EmployeeService {
    baseUrl = config.baseUrl;
    addEmployee(data) {
        return axios.AxiosService.postService('${this.baseUrl}employee', data);
    }
}