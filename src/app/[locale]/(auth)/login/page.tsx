import LoginForm from "./LoginForm";
import TwoFactorAuth from "./TwoFactorAuth";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <LoginForm />
      <TwoFactorAuth />
    </div>
  );
}
