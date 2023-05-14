// Core
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';

// Hooks
import { useSignUp } from '../../../hooks';

// Elements
import { Input } from '../elements';

// Other
import { schema } from './config';

import { IAuthRequest } from '../../../types';

const defaultValues: IAuthRequest & { confirmPassword: string } = {
    name:            '',
    email:           '',
    password:        '',
    confirmPassword: '',
};

export const SignUpForm: React.FC = () => {
    const signup = useSignUp();

    const form = useForm< typeof defaultValues >({
        mode:     'onTouched',
        resolver: yupResolver(schema),
        defaultValues,
    });

    const handleSubmit = form.handleSubmit(async (data) => {
        const { confirmPassword, ...user } = data;
        await signup.mutateAsync(user);
        form.reset();
    });

    useEffect(() => {
        form.setFocus('name');
    }, []);


    return (
        <form className='form centered' onSubmit={handleSubmit}>
            <div className='wrapper centered'>
                <div className='logo'></div>
                <div>
                    <Input
                        error = {form.formState.errors.name} placeholder = 'Имя'
                        register = {form.register('name')} />

                    <Input
                        error = {form.formState.errors.email} placeholder = 'Почта'
                        register = {form.register('email')} />

                    <Input
                        error = {form.formState.errors.password}
                        type = 'password'
                        placeholder = 'Пароль'
                        register = {form.register('password')} />

                    <Input
                        error = {form.formState.errors.confirmPassword }
                        type = 'password'
                        placeholder = 'Пароль'
                        register = {form.register('confirmPassword')} />

                    <button
                        className='signupSubmit'
                        type='submit'>
                            Создать аккаунт
                    </button>
                </div>
                <p className='options'>Есть аккаунт? <NavLink to='/login'>Войти</NavLink></p>
            </div>
        </form>
    );
};
