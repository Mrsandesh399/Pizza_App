import axios from "axios";
import {MAIN_URL} from "./Url";

export function getPost(){
    return axios.get(`${MAIN_URL}posts/products`)
}

export function signup(data){
    return axios.post(`${MAIN_URL}posts/signup`,data)
}

export function login(data){
    return axios.post(`${MAIN_URL}posts/login`,data)
}