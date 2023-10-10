import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";
import RegisterContent from "../features/auth/RegisterContent";
import RegisterForm from "../features/auth/RegisterForm";
import Header from "../layout/Header";

export default function LoginPage() {
  return <div>
    <div className="flex flex-col">
      <Header/>
      <div className="flex">
      {/* <LoginContent/>
      <LoginForm/> */}

      <RegisterContent/>
      <RegisterForm/>
      </div>


    </div>
  </div>;
}
