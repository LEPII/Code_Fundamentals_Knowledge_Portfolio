import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, color = "danger" }: ButtonProps) => {
  return <div className={"btn btn-" + color}>{children}</div>;
};

export default Button;
