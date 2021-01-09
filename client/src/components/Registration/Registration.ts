import User from "@/Model/User";
import {Gender} from '@/Model/Enum/Gender'

export default {
    methods: {
        registerUser() {
            console.log(this.user);
        }
    },
    data () {
        return {
            user: new User(),
            sending: false,
            Gender: Gender
        }
    }
}