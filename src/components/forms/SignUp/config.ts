// Core
import * as yup from 'yup';
import { IAuthRequest } from '../../../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'Минимальная длина - ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';

export const schema: yup.SchemaOf<IAuthRequest & { confirmPassword: string }> = yup.object().shape({
    name:            yup.string().min(5, tooShortMessage).max(40, tooLongMessage).required('*Обязательное поле'),
    email:           yup.string().email('Email must be a valid email').required('*Обязательное поле'),
    password:        yup.string().min(8, tooShortMessage).max(16, tooLongMessage).required('*Обязательное поле'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли должны совпадать').required('*Обязательное поле'),
});
