export interface BodyLogin {
    username: string;
    password: string;
}
export interface BodyRegister {
    username: string;
    password: string;
}
export interface Login {
    token: string;
    email: string;
}
export interface Register {
    email: string;
    token: string;
}