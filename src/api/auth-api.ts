import HTTPTransport from "../utils/http-transport";


export type TUser = {
    id: number;
    login: string;
    first_name: string;
    second_name: string;
    display_name: string;
    avatar: string;
    phone: string;
    email: string;
};

export type TCreateUser = Omit<TUser, 'avatar' | 'display_name' | 'id'>  & {
    password: string
}

export type TSignUpResponse = {
    id: number
}


const authAPIInstance = new HTTPTransport('/auth');

export default class AuthAPI {
    create(data: TCreateUser){
        return authAPIInstance.post(`/signup`, { data,  headers:{"Content-Type": "application/json"}});
    }
}