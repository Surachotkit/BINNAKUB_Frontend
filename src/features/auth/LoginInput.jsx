export default function LoginInput({
  placeholder,
  type = "text",
  value,
  onChange,
}) {
  return (
    <div>
      <input
        type={type}
        className="block border p-3 pl-10 w-full rounded-md mt-5"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
