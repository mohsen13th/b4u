"use client";

import { Controller, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { SimpleInputProps, ValidationType } from "../types";
import { useInputValidation } from "../hooks/useInputValidation";

const SimpleInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "لطفا تایپ کنید",
  disabled,
  className,
  validationType,
}: SimpleInputProps<T> & { validationType?: ValidationType }) => {
  const validation = useInputValidation(validationType || "text");

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label className="text-right pr-1 mb-1" htmlFor={name}>
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
              type="text"
              disabled={disabled}
              placeholder={placeholder}
              onBlur={() => field.onBlur()}
              onInput={(e) => validation.onInput?.(e)}
              onKeyDown={(e) => validation.onKeyDown?.(e)}
              className={cn(
                className,
                fieldState.error
                  ? "border-destructive focus-visible:ring-destructive"
                  : "border-input",
              )}
            />

            <div className="text-destructive text-xs mb-3 flex items-center gap-1 min-h-[20px]">
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

export default SimpleInput;
