export interface IAuthRequest {
    email: string;
    password: string;
    name?: string;
}

export interface IResetPassword {
    oldPassword: string,
    newPassword : string,
}

export interface IProfile {
    hash: string;
    name: string;
    email: string;
    avatar: string;
}

export interface IProfileRequest {
    firstName: string;
    lastName: string;
}

export interface IFormData {
    append(name: string, value: string | Blob | ArrayBuffer, fileName?: string): void;
    get(name: string): string | null;
}
