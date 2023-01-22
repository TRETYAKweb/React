// Core
import * as yup from 'yup';

// eslint-disable-next-line no-template-curly-in-string
const tooShortMessage = 'Минимальная длина - ${min} символов';
// eslint-disable-next-line no-template-curly-in-string
const tooLongMessage = 'максимальная длина - ${max} символов';

export const schema = yup.object().shape({
    firstName: yup.string().min(2, tooShortMessage).max(40, tooLongMessage).required('*Обязательное поле'),
    lastName:  yup.string().min(2, tooShortMessage).max(40, tooLongMessage).required('*Обязательное поле'),
});
