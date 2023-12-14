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

export type TSignUpUserData = Omit<TUser, 'avatar' | 'display_name' | 'id'>  & {
    password: string
}

export type TSignUpResponse = {
    id: number
}

export type TSignInUserData = {
    login: string;
    password: string;
}
    
const authAPIInstance = new HTTPTransport('/auth');

export default class AuthAPI {
    singup(data: TSignUpUserData) {
        return authAPIInstance.post(`/signup`, { data,  headers:{"Content-Type": "application/json"}});
    }
    signin(data: TSignInUserData) {
        return authAPIInstance.post(`/signin`, { data,  headers:{"Content-Type": "application/json"}});
    }
    getUser() {
        return authAPIInstance.get("/user", {headers: {mode: 'cors', credentials: 'include', "Content-Type": "application/json"}});
    }
    logout() {
        return authAPIInstance.post("/logout")
    }
}