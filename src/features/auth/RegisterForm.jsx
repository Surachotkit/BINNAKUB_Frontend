import Joi from "joi";
import RegisterInput from "./RegisterInput";
import { useState } from "react";
import { useAuth } from "../../hooks/use-auth";
import InputErrorMessage from "./InputErrorMessage";
import { toast } from "react-toastify";

const registerSchema = Joi.object({
  email: Joi.string().trim().required().messages({
    "string.empty": "Email is required",
  }),
  password: Joi.string()
    .trim()
    .required()
    .pattern(/^[a-zA-Z0-9]{8,30}$/)
    .messages({
      "string.empty": "Password is required",
    }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).trim().required(),
});

const validateRegister = (input) => {
  const { error } = registerSchema.validate(input, { abortEarly: false });
  console.dir(error);

  if (error) {
    const result = error.details.reduce((acc, el) => {
      const { message, path } = el;
      acc[path[0]] = message;
      return acc;
    }, {});
    return result;
  }
};

export default function RegisterForm() {
  const [input, setInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({});

  const { register } = useAuth();

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const validationError = validateRegister(input);
    if (validationError) {
      return setError(validationError);
    }
    setError({});
    console.log(input);
    register(input).catch((err) => {
      toast.error(err);
    });
  };

  return (
    <form className="flex justify-center flex-1" onSubmit={handleSubmitForm}>
      <div className="flex h-[90vh]">
        <div className="flex flex-col justify-center w-[600px] p-5 ">
          <div className="flex justify-center pb-5 text-[1.5rem] font-bold">
            REGISTER
          </div>
          <div>
            <RegisterInput
              placeholder="EMAIL ADDRESS"
              onChange={handleChangeInput}
              name="email"
              value={input.email}
              hasError={error.email}
            />
            {error.email && <InputErrorMessage message={error.email} />}
          </div>

      
          <RegisterInput
            placeholder="PASSWORD"
            type="password"
            onChange={handleChangeInput}
            name="password"
            value={input.password}
            hasError={error.password}
          />
          {error.password && <InputErrorMessage message={error.password} />}

     
          <RegisterInput
            placeholder="CONFIRM PASSWORD"
            type="password"
            onChange={handleChangeInput}
            name="confirmPassword"
            value={input.confirmPassword}
            hasError={error.confirmPassword}
          />
          {error.confirmPassword && (
            <InputErrorMessage message={error.confirmPassword} />
          )}
          {/* <span className="text-red-500 pb-5">Invalid</span> */}
          <button className="flex justify-center bg-red-500 rounded-md w-full p-2 text-[#D9D9D9] hover:bg-red-600 mt-5">
            JOIN BINNAKUB
          </button>
        </div>
      </div>
    </form>
  );
}
