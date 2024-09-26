"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import InputField from "../../components/form/InputField";
import { Account } from "@/interface/auth";
import { useAppDispatch } from "@/redux/store";
import { updateAccount } from "@/redux/slice/auth";
import { useRouter } from "next/navigation";
import moment from "moment";
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
        <button
          type="submit"
          className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
