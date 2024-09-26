import LoginForm from "./LoginForm";

export interface ILoginProps {}

export default function Login(props: ILoginProps) {
  return (
    <div className="mx-auto mt-10 max-w-md">
      <LoginForm />
    </div>
  );
}
