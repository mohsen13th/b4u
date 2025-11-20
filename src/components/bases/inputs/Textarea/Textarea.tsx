"use client";

import { Controller, FieldValues } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

import { SimpleTextareaProps, ValidationType } from "../types";
import { useInputValidation } from "../hooks/useInputValidation";

const SimpleTextarea = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "لطفا تایپ کنید",
  disabled,
  className,
  validationType,
  rows = 4,
}: SimpleTextareaProps<T> & { validationType?: ValidationType }) => {
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
            <textarea
              id={name}
              {...field}
              disabled={disabled}
              placeholder={placeholder}
              rows={rows}
              onBlur={() => field.onBlur()}
              onInput={(e) => validation.onInput?.(e)}
              onKeyDown={(e) => validation.onKeyDown?.(e)}
              className={cn(
                "resize-none rounded-md border p-2 focus:outline-none focus:ring",
                className,
                fieldState.error ? "border-destructive focus:ring-destructive" : "border-input",
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

export default SimpleTextarea;
