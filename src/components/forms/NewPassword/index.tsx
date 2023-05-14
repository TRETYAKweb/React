// Core
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';


// Elements
import { Input } from '../elements';

// Other
import { schema } from './config';
import { authActions } from '../../../lib/redux/actions';
import { useAppDispatch } from '../../../lib/redux/init/store';
import { IResetPassword } from '../../../types';

export const NewPasswordForm: React.FC = () => {
    const dispatch = useAppDispatch();

    const form = useForm<IResetPassword>({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const handleSubmit = form.handleSubmit((data) => {
        dispatch(authActions.resetPasswordRequest(data));
    });

    useEffect(() => {
        form.setFocus('oldPassword');
    }, []);


    return (
        <form className='form' onSubmit={handleSubmit}>
            <div className='wrapper'>
                <div>
                    <h1>Смена пароля</h1>

                    <Input
                        placeholder='Старый пароль'
                        error = {form.formState.errors.oldPassword}
                        register = {form.register('oldPassword')} />

                    <Input
                        placeholder='Новый пароль'
                        error = {form.formState.errors.newPassword}
                        register = {form.register('newPassword')} />

                    <button className='loginSubmit' type='submit'>Сменить пароль</button>
                </div>
                <NavLink to={'/profile'}>← Назад</NavLink>
            </div>
        </form>
    );
};
