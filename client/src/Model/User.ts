import {Gender} from "@/Model/Enum/Gender";

export default class User {
    private id: number;
    public email: string = '';
    public name: string = '';
    public gender: Gender|undefined = undefined;
    private createdAt: Date;

    constructor() {
        this.id = (new Date()).getMilliseconds();
        this.createdAt = new Date()
    }
}