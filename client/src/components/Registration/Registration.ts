import User from "@/Model/User";
import {Gender} from '@/Model/Enum/Gender'
import AuthRepository from "@/repositories/AuthRepository";

export default {
    methods: {
        registerUser() {
            // @ts-ignore
            this.repository.create(this.user);
        }
    },
    data () {
        return {
            user: new User(),
            sending: false,
            Gender: Gender,
            showDialog: false,
            repository: new AuthRepository()
        }
    }
}