"use client";

import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { SimpleInputProps } from "../types";

const ConfirmPasswordInput = <T extends FieldValues>({
  control,
  name,
  label = "تکرار رمز عبور",
  placeholder = " ",
  disabled,
  className,
}: SimpleInputProps<T>) => {
  const [show, setShow] = useState(false);
  const { watch, setError, clearErrors } = useFormContext();
  const password = watch("password");
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.value !== password) {
      setError("confirmPassword", { type: "manual", message: "کلمه عبور و تکرار آن یکسان نیستند" });
    } else {
      clearErrors("confirmPassword");
    }
  };
  return (
    <div className="flex flex-col gap-1 relative">
      {label && (
        <Label className="text-right pr-1 mb-1" htmlFor={name}>
          {label}
        </Label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          return (
            <>
              <Input
                id={name}
                {...field}
                type={show ? "text" : "password"}
                disabled={disabled}
                placeholder={placeholder}
                onChange={(e) => {
                  const val = e.target.value.trim();
                  field.onChange(val);
                }}
                onBlur={handleBlur}
                className={cn(
                  className,
                  fieldState.error
                    ? "border-destructive focus-visible:ring-destructive"
                    : "border-input",
                  "appearance-none input-hide-ms-reveal",
                  show ? "input-text-security-shown" : "input-text-security-hidden",
                )}
              />

              <button
                type="button"
                onClick={() => setShow(!show)}
                className="absolute top-[40px] left-3 -translate-y-1/2"
              >
                {show ? (
                  <EyeOff className="h-4 w-4 text-gray-500" />
                ) : (
                  <Eye className="h-4 w-4 text-gray-500" />
                )}
              </button>

              <div className="text-destructive text-xs mb-3 flex items-center gap-1 min-h-[20px]">
                {fieldState.error && (
                  <>
                    <span className="pr-1">{fieldState.error.message}</span>
                    <AlertCircle size={16} className="text-destructive" />
                  </>
                )}
              </div>
            </>
          );
        }}
      />
    </div>
  );
};
export default ConfirmPasswordInput;
