"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useFormStatus } from "react-dom";

interface FormSubmitProps {
  children: React.ReactNode;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | "primary";
  disabled?: boolean;
  className?: string;
}

export const FormSubmit = ({
  children,
  variant,
  disabled,
  className,
}: FormSubmitProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      variant={variant}
      size={"sm"}
      disabled={pending || disabled}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
