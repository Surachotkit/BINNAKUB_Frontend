import LoginContent from "../features/auth/LoginContent";
import LoginForm from "../features/auth/LoginForm";

export default function LoginPage() {
  return (
    <div className="flex flex-col">
      <div className="flex ">
        <LoginContent />
        <LoginForm />
      </div>
    </div>
  );
}
