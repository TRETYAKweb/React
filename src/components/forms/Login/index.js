// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

// Hooks
import { useLogin } from '../../../hooks';

// Elements
import { Input } from '../elements';

// Other
import { schema } from './config';

export const LoginForm = () => {
    const login = useLogin();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const handleSubmit = form.handleSubmit(async (credentials) => {
        await login.mutateAsync(credentials);
        form.reset();
    });

    useEffect(() => {
        form.setFocus('email');
    }, []);

    return (
        <form  className='form centered' onSubmit={ handleSubmit }>
            <div className='wrapper centered'>
                <div className='logo'></div>
                <div>

                    <Input
                        placeholder='Почта' error = {form.formState.errors.email}
                        register = {form.register('email')} />

                    <Input
                        placeholder='Пароль' type = 'password'
                        error = {form.formState.errors.password}
                        register = {form.register('password')} />

                    <button className='loginSubmit' type='submit'>Войти</button>

                </div>

                <p className='options'>
                    Нет аккаунта?<NavLink to='/signup'>Создать</NavLink>
                </p>

            </div>
        </form>
    );
};
