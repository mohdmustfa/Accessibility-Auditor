function Input({
  value,
  onChange,
  placeholder,
}) {

  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="border px-4 py-3 rounded-lg max-w-xl flex-grow"
      placeholder={placeholder}
    />
  );
}

export default Input;