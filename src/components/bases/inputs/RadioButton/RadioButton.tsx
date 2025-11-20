"use client";

import { Controller, FieldValues } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { AlertCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

import { SimpleRadioProps } from "../types";

const SimpleRadio = <T extends FieldValues>({
  control,
  name,
  label = "یک گزینه را انتخاب کنید",
  options,
  className,
}: SimpleRadioProps<T>) => {
  return (
    <div className={cn("flex flex-col gap-1 mb-3", className)}>
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
            <div className={cn("flex flex-col gap-2")}>
              {options.map((opt) => (
                <label
                  key={opt.value}
                  className={cn(
                    "flex items-center gap-2 cursor-pointer text-sm pt-1",
                    (opt.disabled || opt.locked) && "opacity-60 cursor-not-allowed",
                  )}
                >
                  <input
                    type="radio"
                    value={opt.value}
                    checked={field.value === opt.value}
                    onChange={() => {
                      if (!opt.disabled && !opt.locked) field.onChange(opt.value);
                    }}
                    disabled={opt.disabled || opt.locked}
                    className={cn(
                      "accent-primary mt-[-2px]",
                      (opt.disabled || opt.locked) && "cursor-not-allowed",
                    )}
                  />
                  <span className="flex items-center gap-1">
                    {opt.label}
                    {opt.locked && <Lock size={14} className="text-muted-foreground" />}
                  </span>
                </label>
              ))}
            </div>

            <div className="text-destructive text-xs mt-1 flex items-center gap-1 min-h-[20px]">
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

export default SimpleRadio;
