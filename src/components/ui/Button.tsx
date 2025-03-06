import { ReactNode, HTMLAttributes, ButtonHTMLAttributes, JSX } from "react";
import { Link, NavLink, To } from "react-router";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  as?: "button" | "link" | "navlink";
  variant?: "primary" | "secondary";
  to?: To;
  icon?: ReactNode;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  text,
  as = "button",
  type = "button",
  variant = "primary",
  to,
  icon,
  className = "",
  children,
  ...props
}: ButtonProps): JSX.Element => {
  const baseStyles =
    "text-lg px-8 py-4 leading-none rounded-xl transition-all duration-300";
  const variantStyles = {
    primary: "bg-indigo-700 text-white hover:bg-indigo-800",
    secondary: "bg-indigo-200 text-indigo-900 hover:bg-indigo-300",
  };

  const classes = `${baseStyles} ${variantStyles[variant]} ${className}`.trim();

  const renderContent = () => (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {text || children}
    </>
  );

  if ((as === "link" || as === "navlink") && !to) {
    console.warn(
      "The 'to' prop is required when 'as' is 'link' or 'navlink'. Rendering a button instead."
    );
    return (
      <button type={type} className={classes} {...props}>
        {renderContent()}
      </button>
    );
  }

  if (as === "link" && to) {
    return (
      <Link
        to={to}
        className={classes}
        {...(props as HTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </Link>
    );
  }

  if (as === "navlink" && to) {
    return (
      <NavLink
        to={to}
        className={({ isActive }) =>
          `${classes} ${isActive ? "pointer-events-none" : ""}`.trim()
        }
        {...(props as HTMLAttributes<HTMLAnchorElement>)}
      >
        {renderContent()}
      </NavLink>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {renderContent()}
    </button>
  );
};

export default Button;
