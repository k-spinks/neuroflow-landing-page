interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ className = "", children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-full outline-none cursor-pointer relative overflow-hidden border border-transparent bg-violet-600 duration-300 hover:bg-blue-600 ${className}`}
    >
      {children}
    </button>
  );
};
