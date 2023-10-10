import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterForm from "../features/auth/RegisterForm";

export default function LoginPage() {
  return <div>
    <div className="flex justify-between">
      <LoginContent/>
      <LoginForm/>
      {/* <RegisterForm/> */}

    </div>
  </div>;
}
