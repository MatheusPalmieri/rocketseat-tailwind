import type { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: [
    "rounded-lg outline-none shadow-sm",
    "px-4 py-2",
    "text-sm font-semibold",
    "focus-visible:ring-violet-100 focus-visible:offset-2 focus-visible:ring-2",
    "disabled:opacity-50 active:opacity-80 hover:opacity-90",
    "transition-all duration-200 cursor-pointer",
  ],
  variants: {
    variant: {
      primary: "bg-violet-600 text-white",
      secondary: "border border-zinc-300 text-zinc-700",
      ghost: "rounded-md px-2 shadow-none hover:bg-zinc-50 ",
    },
    size: {
      default: "h-11 min-w-11",
      icon: "size-8 inline-flex items-center justify-center",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

export const Button = ({
  variant,
  size,
  className,
  type = "button",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      type={type}
      className={buttonVariants({ variant, size, className })}
    />
  );
};
