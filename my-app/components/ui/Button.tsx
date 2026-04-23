interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  onClick,
  className,
  variant = 'primary',
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn--${variant} ${className}`}
    >
      {children}
    </button>
  );
}
