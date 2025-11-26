import { Button as ShadButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type FormButtonProps = React.ComponentProps<typeof ShadButton> & {
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
};

const FormButton = ({
  isLoading = false,
  loadingText = "در حال انجام...",
  className,
  children,
  icon,
  type = "submit",
  ...props
}: FormButtonProps) => {
  return (
    <ShadButton
      type={type}
      disabled={isLoading || props.disabled}
      className={cn(
        "relative transition flex items-center justify-center gap-2 rounded-lg font-extralight",
        className,
      )}
      {...props}
    >
      {isLoading && (
        <span className="absolute left-3 w-4 h-4 border-2 border-white/60 border-t-transparent rounded-full animate-spin" />
      )}
      {isLoading ? loadingText : children}
      {icon && !isLoading && <span className="flex items-center">{icon}</span>}
    </ShadButton>
  );
};

export default FormButton;
