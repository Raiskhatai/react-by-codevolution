import type React from "react";
type ButtonProp = {
  variant: "primary" | "secondry";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

const Button = ({ variant, children, ...rest }: ButtonProp) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
