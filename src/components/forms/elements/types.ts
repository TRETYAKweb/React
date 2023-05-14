import { UseFormRegisterReturn } from 'react-hook-form';

export interface IPropTypes {
    placeholder?: string;
    type?: string;
    tag?: string;
    label?: string;
    register: UseFormRegisterReturn;
    error?: {
        message?: string;
    };
    options?: {
        value:string;
        name:string;
    }[];
}
