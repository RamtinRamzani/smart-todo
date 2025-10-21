type ButtonProps = {
  className?: string;
  title?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
};

const Button = ({
  className,
  onClick,
  title,
  variant = "primary",
  type = "button",
  size = "md",
}: ButtonProps) => {
  const variantClasses = {
    primary: `bg-purple-800 text-white border border-purple-800 hover:bg-purple-600 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 disabled:bg-purple-400 disabled:cursor-not-allowed`,

    secondary: `bg-gray-100 text-gray-800 border border-gray-200 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:bg-gray-50 disabled:dark:bg-gray-800 disabled:cursor-not-allowed`,

    outline: `bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:text-gray-400 disabled:dark:text-gray-500 disabled:cursor-not-allowed`,
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-base",
    lg: "px-6 py-4 text-lg",
  };

  return (
    <button
      className={`${className ?? ""} ${variantClasses[variant]} ${
        sizeStyles[size]
      } capitalize rounded-2xl cursor-pointer transition-all duration-75`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
