export default function LoginInput({placeholder,type}) {
  return (
    <div>
      <input
            type={type}
            className="block border p-3 pl-10 w-full rounded-md"
            placeholder={placeholder}
          />
    </div>
  );
}
