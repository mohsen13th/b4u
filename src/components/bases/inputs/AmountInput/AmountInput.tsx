"use client";

import { Controller, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { AmountInputProps } from "../types";
import { useState } from "react";

const AmountInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "لطفا تایپ کنید",
  disabled,
  className,
  unit,
}: AmountInputProps<T>) => {
  const [value, setValue] = useState("");

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
          const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const raw = e.target.value.replace(/,/g, "");

            // فقط عدد مجاز است
            if (!/^\d*$/.test(raw)) return;

            // فرمت عدد برای نمایش
            const formatted = raw ? Number(raw).toLocaleString("en-US") : "";

            setValue(formatted);

            // فرم را در جریان بگذار
            field.onChange(raw);
          };

          return (
            <>
              <Input
                id={name}
                type="text"
                disabled={disabled}
                placeholder={placeholder}
                onBlur={field.onBlur}
                value={value}
                onChange={handleChange}
                className={cn(
                  className,
                  fieldState.error
                    ? "border-destructive focus-visible:ring-destructive"
                    : "border-input",
                )}
              />
              {unit && (
                <span className="absolute left-3 top-[40px] -translate-y-1/2 text-xs text-gray-400">
                  {unit}
                </span>
              )}
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

export default AmountInput;
