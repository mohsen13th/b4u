"use client";

import React, { useRef } from "react";
import { Controller, FieldValues } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useInputValidation } from "../hooks/useInputValidation";
import { OTPInputProps } from "../types";

const OTPInput = <T extends FieldValues>({
  control,
  name,
  label,
  disabled,
  otpLength = 4,
  onComplete,
}: OTPInputProps<T>) => {
  const validation = useInputValidation("number");
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

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
        render={({ field, fieldState }) => {
          const valueArray = field.value
            ? field.value.split("").slice(0, otpLength)
            : Array(otpLength).fill("");

          const callOnCompleteIfFull = (newVals: string[]) => {
            const code = newVals.join("");
            if (newVals.every((v) => v !== "")) {
              onComplete?.(code);
            }
          };

          const handleChange = (index: number, val: string) => {
            if (!/^[0-9]?$/.test(val)) return;
            const newValues = [...valueArray];
            newValues[index] = val;
            const newCode = newValues.join("");
            field.onChange(newCode);

            if (val && index < otpLength - 1) {
              inputRefs.current[index + 1]?.focus();
            }

            callOnCompleteIfFull(newValues);
          };

          const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Backspace") {
              if (!valueArray[index] && index > 0) {
                inputRefs.current[index - 1]?.focus();
              } else {
                const newValues = [...valueArray];
                newValues[index] = "";
                field.onChange(newValues.join(""));
              }
            }
            validation.onKeyDown?.(e);
          };

          const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
            const paste = e.clipboardData.getData("text").trim();
            if (!/^[0-9]+$/.test(paste)) return;
            const chars = paste.split("").slice(0, otpLength);
            const newValues = Array(otpLength)
              .fill("")
              .map((_, i) => chars[i] ?? "");
            field.onChange(newValues.join(""));
            newValues.forEach((v, i) => {
              if (inputRefs.current[i]) {
                inputRefs.current[i]!.value = v;
              }
            });
            const firstEmpty = newValues.findIndex((c) => c === "");
            const focusIndex = firstEmpty === -1 ? otpLength - 1 : firstEmpty;
            inputRefs.current[focusIndex]?.focus();
            callOnCompleteIfFull(newValues);
            e.preventDefault();
          };

          return (
            <>
              <div className="flex gap-3 justify-center" dir="ltr">
                {Array.from({ length: otpLength }).map((_, index) => (
                  <Input
                    key={index}
                    ref={(el) => {
                      inputRefs.current[index] = el;
                    }}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    disabled={disabled}
                    value={valueArray[index] ?? ""}
                    onChange={(e) => handleChange(index, (e.target as HTMLInputElement).value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className={cn(
                      "w-12 h-12 text-center text-lg font-semibold tracking-widest",
                      fieldState.error
                        ? "border-destructive focus-visible:ring-destructive"
                        : "border-input",
                    )}
                  />
                ))}
              </div>

              <div className="text-destructive text-xs mt-2 flex items-center gap-1 min-h-[20px] justify-center">
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

export default OTPInput;
