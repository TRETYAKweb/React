// Core
import axios from 'axios';
import {
    IFormData, IApiSuccessResponse, IResetPassword,
    IPost, IPostRequest, ICommentRequest, IProfile, IProfileRequest, IComment, IAuthRequest,
} from '../types';

// Instruments
import { AUTH_URL, FEED_URL } from './config';

const getToken = (): string => {
    const token = localStorage.getItem('token');

    return typeof token === 'string' ? token : '';
};


const axiosInstanse = axios.create({
    headers: {
        Authorization: `Bearer ${getToken()}`,
    },
});


export const api = Object.freeze({
    auth: {
        async signup(userInfo: IAuthRequest): Promise<IApiSuccessResponse<string>> {
            const { data } = await axiosInstanse.post<IApiSuccessResponse<string>>(`${AUTH_URL}/register`, userInfo);

            return data;
        },
        async login(credentials: IAuthRequest): Promise<IApiSuccessResponse<string>> {
            const { data } = await axiosInstanse.post<IApiSuccessResponse<string>>(`${AUTH_URL}/login`,
                credentials);

            return data;
        },

        async auth(): Promise<void> {
            await axiosInstanse.get(`${AUTH_URL}/auth`);
        },

        logout(): Promise<Response> {
            return axiosInstanse.get(`${AUTH_URL}/logout`);
        },

        async resetPassword({
            oldPassword,
            newPassword,
        }: IResetPassword): Promise<IApiSuccessResponse<string>> {
            const { data } = await axiosInstanse.post<IApiSuccessResponse<string>>(`${AUTH_URL}/reset-password`,
                { oldPassword, newPassword });

            return data;
        },
    },
    posts: {
        fetch: async (): Promise<IApiSuccessResponse<IPost[]>> => {
            const { data } = await axiosInstanse.get<IApiSuccessResponse<IPost[]>>(FEED_URL);

            return data;
        },
        async create(post: IPostRequest): Promise<IApiSuccessResponse<IPost>> {
            const { data } = await axiosInstanse.post<IApiSuccessResponse<IPost>>(FEED_URL, post);

            return data;
        },
        remove(postId: string): Promise <Response> {
            return axiosInstanse.delete(`${FEED_URL}/${postId}`);
        },
        like(postId: string): Promise<Response> {
            return fetch(`${FEED_URL}/${postId}/like`);
        },
        unlike(postId: string): Promise<Response> {
            return fetch(`${FEED_URL}/${postId}/unlike`);
        },
        async comment(
            { hash, body }: { hash: string, body: ICommentRequest },
        ):Promise<IApiSuccessResponse<IPost>> {
            const { data } = await axiosInstanse.put<IApiSuccessResponse<IPost>>(`${FEED_URL}/${hash}/comment`, body);

            return data;
        },
        async getComments(): Promise<IApiSuccessResponse<IComment[]>> {
            const { data } = await axiosInstanse.get<IApiSuccessResponse<IComment[]>>(`${FEED_URL}/comments`);

            return data;
        },
        async getPostById(postHash: string): Promise<IApiSuccessResponse<IPost>> {
            const { data } = await axiosInstanse.get<IApiSuccessResponse<IPost>>(`${FEED_URL}/${postHash}`);

            return data;
        },
    },
    profile: {
        async fetch(): Promise<IApiSuccessResponse<IProfile>> {
            const { data } = await axiosInstanse.get<IApiSuccessResponse<IProfile>>(`${AUTH_URL}/profile`);

            return data;
        },
        async updateProfile(profileInfo: IProfileRequest): Promise<IApiSuccessResponse<IProfile>> {
            const { data } = await axiosInstanse.put<IApiSuccessResponse<IProfile>>(`${AUTH_URL}/profile`, profileInfo);

            return data;
        },
        updateAvatar(avatarFormData: IFormData): Promise<void> {
            const formData = new FormData();

            // Добавляем данные из IFormData в FormData
            for (const [name, value] of Object.entries(avatarFormData)) {
                formData.append(name, value);
            }

            return axiosInstanse.post(`${AUTH_URL}/image`, formData);
        },
    },
});
