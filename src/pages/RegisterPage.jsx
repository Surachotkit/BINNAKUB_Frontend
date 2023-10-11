import RegisterContent from "../features/auth/RegisterContent";
import RegisterForm from "../features/auth/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="flex flex-col">
      <div className="flex ">

      <RegisterContent />
      <RegisterForm />
      </div>
    </div>
  );
}
