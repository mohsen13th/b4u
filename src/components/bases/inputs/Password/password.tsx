"use client";

import { Controller, FieldValues, useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { SimpleInputProps } from "../types";

const PasswordInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = " ",
  disabled,
  className,
  labelClassName,
}: SimpleInputProps<T>) => {
  const [show, setShow] = useState(false);

  const { watch, setError, clearErrors } = useFormContext();
  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  useEffect(() => {
    if (!confirmPassword) return;
    if (confirmPassword !== password) {
      setError("confirmPassword", {
        type: "manual",
        message: "کلمه عبور و تکرار آن یکسان نیستند",
      });
    } else {
      clearErrors("confirmPassword");
    }
  }, [password, confirmPassword, setError, clearErrors]);

  return (
    <div className="flex flex-col gap-1 relative ">
      {label && (
        <Label className={cn("text-right pr-1 mb-1 font-extralight", labelClassName)} htmlFor={name}>
          {label}
        </Label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
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
              onBlur={() => field.onBlur()}
              className={cn(
                "font-iransans text-xs bg-white",
                className,
                fieldState.error
                  ? "border-destructive focus-visible:border-destructive"
                  : "border-input",
                "appearance-none input-hide-ms-reveal",
                show
                  ? "input-text-security-shown"
                  : "input-text-security-hidden"
              )}
            />

            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute top-10 left-3 -translate-y-1/2"
            >
              {show ? (
                <EyeOff className="h-4 w-4 text-gray-500" />
              ) : (
                <Eye className="h-4 w-4 text-gray-500" />
              )}
            </button>

            <div className="text-destructive text-xs mb-3 flex items-center gap-1 min-h-5">
              {fieldState.error && (
                <>
                  <span className="pr-1">{fieldState.error.message}</span>
                  <AlertCircle size={16} className="text-destructive" />
                </>
              )}
            </div>
          </>
        )}
      />
    </div>
  );
};

export default PasswordInput;
