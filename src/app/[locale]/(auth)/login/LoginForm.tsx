"use client";
import { Account } from "@/interface/auth";
import { updateAccount } from "@/redux/slice/auth";
import { useAppDispatch } from "@/redux/store";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "@mui/material";
import moment from "moment";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/form/InputField";
export interface ILoginFormProps {}

interface IFormInputs {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email("Invalid email format").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm(props: ILoginFormProps) {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data: IFormInputs) => {
    const expireTime = moment().utc().add(180, "seconds").format("YYYY-MM-DDTHH:mm:ss[Z]");
    const currentTime = moment().utc().format("YYYY-MM-DDTHH:mm:ss[Z]");
    const res: Account = {
      accessToken: "accessToken",
      refreshToken: "refreshToken_",
      expireTime: expireTime,
    };
    dispatch(updateAccount(res));
    router.push("/dashboard");
  };

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
    >
      <InputField
        id="email"
        label="Email"
        type="text"
        register={register}
        errors={errors}
        autocomplete="username"
      />
      <InputField
        id="password"
        label="Password"
        type="password"
        register={register}
        errors={errors}
        showToggle
        autocomplete="current-password"
      />
      <div className="flex items-center justify-between">
        <Button type="submit" fullWidth variant="contained" color="info">
          Sign In
        </Button>
      </div>
    </form>
  );
}
