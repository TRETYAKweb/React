// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect, useContext } from 'react';

// Hooks
import { useUpdateProfile } from '../../../hooks';

// Elements
import { Input } from '../elements';

import { authContext } from '../../../lib/authContext';

// Other
import { schema } from './config';

export const ProfileForm = () => {
    const { authData } = useContext(authContext);

    const updateProfile = useUpdateProfile();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const handleSubmit = form.handleSubmit(async (user) => {
        await updateProfile.mutateAsync(user);
        form.reset();
    });

    useEffect(() => {
        form.setFocus('firstName');
    }, []);

    return (
        <>
            <form className='form' onSubmit={handleSubmit}>
                <div className='wrapper'>
                    <div>
                        <h1>Привет, {authData.name}</h1>
                        <img src='https://placeimg.com/256/256/animals' alt='avatar' />

                        <Input
                            placeholder='Имя'
                            error = {form.formState.errors.firstName}
                            register = {form.register('firstName')} />
                        <Input
                            placeholder='Фамилия'
                            error = {form.formState.errors.lastName}
                            register = {form.register('lastName')} />

                        <button className='loginSubmit' type='submit'>Обновить профиль</button>
                    </div>
                    <a href='/rtx-homeworks/profile/new-password'>Cменить пароль →</a>
                </div>
            </form>
        </>
    );
};
