import { UniversityModel } from "../../manage-universities/models/university.model";



export interface UserModel {
    id :          number,
    name:         string;
    email:        string;
    phone_number: null | string;
    is_active:    boolean;
    University :  University
}

export interface University {
    email: string
    id: number
    is_active: boolean
    name: string
    phone_number: string
}