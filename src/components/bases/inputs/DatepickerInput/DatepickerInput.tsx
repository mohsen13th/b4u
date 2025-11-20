"use client";

import { Controller, FieldValues } from "react-hook-form";
import { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Calendar as CalendarIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

import "react-multi-date-picker/styles/layouts/mobile.css";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/layouts/prime.css";

import { SimpleInputProps } from "../types";
import { DatePickerRef } from "../types";

interface ExtendedInputProps<T extends FieldValues> extends SimpleInputProps<T> {
  ignoreToday?: boolean;
}

const isDate = (value: unknown): value is Date => value instanceof Date;

const DateInput = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  className,
  ignoreToday = false,
}: ExtendedInputProps<T>) => {
  const pickerRef = useRef<DatePickerRef | null>(null);

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <Label htmlFor={name} className="text-right pr-1 mb-1">
          {label}
        </Label>
      )}

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const displayValue = isDate(field.value)
            ? new DateObject({ date: field.value, calendar: persian }).format("YYYY/MM/DD")
            : "";

          return (
            <>
              <DatePicker
                ref={pickerRef}
                calendar={persian}
                locale={persian_fa}
                calendarPosition="bottom-right"
                format="YYYY/MM/DD"
                value={isDate(field.value) ? new DateObject(field.value) : undefined}
                style={{ display: "none" }}
                onChange={(date: DateObject | null) => {
                  if (!date) {
                    field.onChange(null);
                    return;
                  }

                  const selectedDate = date.toDate();

                  if (ignoreToday) {
                    const today = new Date();
                    const isToday =
                      selectedDate.getFullYear() === today.getFullYear() &&
                      selectedDate.getMonth() === today.getMonth() &&
                      selectedDate.getDate() === today.getDate();

                    if (isToday) {
                      field.onChange(null);
                      return;
                    }
                  }

                  field.onChange(selectedDate);
                }}
              />

              <div className="relative w-full">
                <Input
                  id={name}
                  value={displayValue}
                  readOnly
                  placeholder={placeholder || "انتخاب تاریخ"}
                  onClick={() => pickerRef.current?.openCalendar?.()}
                  className={cn(
                    "cursor-pointer text-right",
                    className,
                    fieldState.error && "border-destructive focus-visible:ring-destructive",
                  )}
                />

                <div className="absolute inset-y-0 left-2 flex items-center gap-2">
                  {displayValue && (
                    <X
                      size={16}
                      className="text-gray-500 hover:text-red-500 cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        field.onChange(null);
                      }}
                    />
                  )}
                  <CalendarIcon
                    size={18}
                    className="text-gray-500 cursor-pointer"
                    onClick={() => pickerRef.current?.openCalendar?.()}
                  />
                </div>
              </div>

              <div className="text-destructive text-sm mb-3 flex items-center gap-1 min-h-[20px]">
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

export default DateInput;
