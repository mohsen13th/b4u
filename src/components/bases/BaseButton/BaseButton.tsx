import { Button as ShadButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Size, Variant } from "./types";

type BaseButtonProps = React.ComponentProps<typeof ShadButton> & {
  variantButton?: Variant;
  sizeButton?: Size;
  className?: string;
};

const variantClasses = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-black hover:bg-gray-300",
  outline: "border border-gray-400 text-black hover:bg-gray-100",
};

const sizeClasses = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const BaseButton = ({
  variantButton,
  sizeButton,
  className,
  children,
  ...props
}: BaseButtonProps) => {
  return (
    <ShadButton
      className={cn(
        "rounded-lg font-extralight transition flex items-center justify-center gap-2",
        variantButton ? variantClasses[variantButton] : "",
        sizeButton ? sizeClasses[sizeButton] : "",
        className,
      )}
      {...props}
    >
      {children}
    </ShadButton>
  );
};

export default BaseButton;
