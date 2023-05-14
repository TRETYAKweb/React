// Core
import * as yup from 'yup';
import { IResetPassword } from '../../../types';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'Минимальная длина - ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';

export const schema: yup.SchemaOf<IResetPassword> = yup.object().shape({
    oldPassword: yup.string().min(2, tooShortMessage).max(40, tooLongMessage).required('*Обязательное поле'),
    newPassword: yup.string().min(2, tooShortMessage).max(40, tooLongMessage).required('*Обязательное поле'),
});
