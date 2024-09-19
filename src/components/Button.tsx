import ButtonSvg from "../assets/svg/ButtonSvg";

interface ButtonProps {
  className: string;
  href: string;
  onClick: any;
  children: any;
  px: any;
  white: boolean;
}

const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  white,
}: ButtonProps) => {
  const classes = `button relative inline-flex 
  items-center justify-center h-11 transition-colors
  hover:text-color-1
  ${px || "px-7"}
  ${white ? "text-n-8" : "text-n-1"}
  ${className || ""}
  `;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <button className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
