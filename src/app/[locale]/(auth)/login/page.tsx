"use client"

import authApi from "@/api/module/auth";
import { BodyLogin } from "@/interface/auth";
import { MetaData } from "@/interface/common";

export interface ILoginProps {
}

export default function Login(props: ILoginProps) {
    const postLogin = async () => {
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

        </div>
    );
}
