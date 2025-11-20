"use client";

import { Controller, FieldValues } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { AlertCircle, Lock } from "lucide-react";
import { cn } from "@/lib/utils";

import { SimpleCheckboxProps } from "../types";

const SimpleCheckbox = <T extends FieldValues>({
  control,
  name,
  label,
  disabled,
  locked,
  className,
}: SimpleCheckboxProps<T>) => {
  return (
    <div className="flex flex-col gap-1">
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <div
              className={cn(
                "flex items-center space-x-2",
                (disabled || locked) && "opacity-60 cursor-not-allowed",
              )}
            >
              <Checkbox
                id={name}
                checked={locked ? true : field.value}
                onCheckedChange={(value) => {
                  if (!locked && !disabled) field.onChange(value);
                }}
                disabled={disabled || locked}
                className={cn(className, fieldState.error ? "border-destructive" : "")}
              />

              {label && (
                <Label
                  htmlFor={name}
                  className={cn(
                    "cursor-pointer select-none flex items-center gap-1",
                    (disabled || locked) && "cursor-not-allowed",
                  )}
                >
                  {label}
                  {locked && <Lock size={14} className="text-muted-foreground" />}{" "}
                </Label>
              )}
            </div>

            <div className="text-destructive text-xs mb-1 flex items-center gap-1 min-h-[15px]">
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

export default SimpleCheckbox;
