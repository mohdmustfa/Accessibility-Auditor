function Button({
  children,
  onClick,
  disabled,
}) {

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        p-2 rounded-lg md:px-5 px-2 py-3
        text-white flex items-center
        transition-all duration-200

        ${
          disabled
            ? "bg-blue-400 cursor-not-allowed opacity-70"
            : "bg-blue-600 hover:bg-blue-700 cursor-pointer"
        }
      `}
    >
      {children}
    </button>
  );
}

export default Button;