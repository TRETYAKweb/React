// Core
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

// Hooks
import { useNavigate } from 'react-router-dom';
import { useUpdateProfile, useProfile } from '../../../hooks';


// Elements
import { Input } from '../elements';

// Other
import { schema } from './config';

export const ProfileForm = () => {
    const navigate = useNavigate();
    const updateProfile = useUpdateProfile();
    const { data: profileData } = useProfile();

    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const handleSubmit = form.handleSubmit(async (user) => {
        await updateProfile.mutateAsync(user);
        form.reset();
        navigate('/feed');
    });


    useEffect(() => {
        form.setFocus('firstName');
    }, []);

    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='wrapper'>
                <div>
                    <h1>Привет, {profileData?.name}</h1>
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
                <NavLink to={'/newPassword'}>Cменить пароль →</NavLink>
            </div>
        </form>
    );
};
