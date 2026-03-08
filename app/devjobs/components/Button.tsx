type ButtonType = {
  text: String;
  onClick: () => void;
};

function Button({ text, onClick }: ButtonType) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-3 bg-devjobs-indigo-500 rounded-md font-bold text-devjobs-slate-100 hover:bg-devjobs-indigo-300 cursor-pointer "
    >
      {text}
    </button>
  );
}

export default Button;
