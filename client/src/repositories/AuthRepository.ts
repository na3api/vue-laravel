import Client from './Clients/AxiosClient';
import User from "@/Model/User";
const resource = '';

export default class AuthRepository {
    get() {
        return Client.get(`${resource}`);
    }
    create(payload: User) {
        return Client.post(`${resource}/register`, payload);
    }
};