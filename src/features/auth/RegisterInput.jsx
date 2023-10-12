export default function RegisterInput({
  placeholder,
  type,
  onChange,
  value,
  name,
  hasError
}) {
  return (
    <div>
      <input
        type={type}
        className={`block border p-3 pl-10 w-full rounded-md mt-5
        ${
          hasError
          ? "border-red-500 focus:ring-red-300"
          : " focus:ring-blue-300 focus:border-blue-500 border-gray-300"
        }
        `}
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
