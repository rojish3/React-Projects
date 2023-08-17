
const Button = ({ bg, color, rounded, label }) => {
  return (
    <>
    <button
      value={label}
      className={`btn border-none px-3 py-2 cursor-pointer shadow ${bg} ${color} ${rounded} lg:text-xl lg:px-4 lg:py-3`}
      >
      {label}
    </button>
    </>
  );
};

export default Button;
