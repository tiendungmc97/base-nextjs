"use client"

import authApi from "@/api/module/auth";
import { BodyLogin, LoginData } from "@/interface/auth";
import { MetaData } from "@/interface/common";
import { updateAccount } from "@/redux/slice/auth";
import { updateSystem } from "@/redux/slice/system";
import { useAppDispatch, useAppSelector } from "@/redux/store";

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
    const dispatch = useAppDispatch();
    const auth = useAppSelector((state) => state.auth);
    
    const handleLogin = () => {
        postLogin()
    }
    const postLogin = async () => {
        const data: LoginData = {
            email: "user@gmail.com",
            token: "eyJhbGciOiJIUzI1NiIsInR5cCI",
        }
        dispatch(updateAccount(data))
        dispatch(updateSystem("dark"))
        try {
            const body: BodyLogin = {
                username: "admin",
                password: "admin"
            }
            const res = await authApi.login(body)
            if (res.data.meta[0].code === MetaData.SUCCESS) {
                
            }
        } catch (error) {

        }
    }

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
