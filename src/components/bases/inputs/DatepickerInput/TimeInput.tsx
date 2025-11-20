"use client";

import React, { useState, useEffect, useRef } from "react";
import { useController, FieldValues } from "react-hook-form";
import * as Popover from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";
import { Clock, X, AlertCircle } from "lucide-react";
import { TimeInputProps } from "../types";

export default function TimeInput<T extends FieldValues>({
  control,
  name,
  label,
  placeholder = "انتخاب ساعت",
  format24 = true,
  required,
}: TimeInputProps<T>) {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: required ? { required: "وارد کردن ساعت الزامی است" } : {},
  });

  const [open, setOpen] = useState(false);
  const [hour, setHour] = useState<number | null>(null);
  const [minute, setMinute] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (field.value) {
      const [h, m] = field.value.split(":").map(Number);
      setHour(h);
      setMinute(m);
    }
  }, [field.value]);

  const formatTime = (h: number | null, m: number | null) => {
    if (h === null || m === null) return "";
    if (format24) {
      return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
    } else {
      const suffix = h >= 12 ? "PM" : "AM";
      const displayHour = (h % 12 || 12).toString().padStart(2, "0");
      return `${displayHour}:${m.toString().padStart(2, "0")} ${suffix}`;
    }
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);
  const minutes = Array.from({ length: 60 }, (_, i) => i);

  return (
    <div className="flex flex-col gap-1 w-full mb-3">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-right pr-1 mb-1">
          {label}
        </label>
      )}

      <Popover.Root open={open} onOpenChange={setOpen}>
        <Popover.Trigger asChild>
          <div className="relative w-full">
            <input
              ref={inputRef}
              readOnly
              value={field.value || ""}
              placeholder={placeholder}
              className={cn(
                "w-full text-right border rounded-md p-1.5 pr-3 cursor-pointer",
                "bg-white dark:bg-black",
                error
                  ? "border-destructive focus-visible:ring-destructive"
                  : "border-gray-300 focus-visible:ring-blue-400",
              )}
              onClick={() => setOpen(true)}
            />
            <div className="absolute inset-y-0 left-2 flex items-center gap-2">
              {field.value && (
                <X
                  className="text-gray-500 hover:text-red-500 cursor-pointer"
                  size={16}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHour(null);
                    setMinute(null);
                    field.onChange("");
                  }}
                />
              )}
              <Clock
                className="text-gray-500 cursor-pointer"
                size={18}
                onClick={() => setOpen(true)}
              />
            </div>
          </div>
        </Popover.Trigger>

        {open && (
          <Popover.Portal>
            <Popover.Content
              align="center"
              side="bottom"
              className="z-50 mt-1 p-4 bg-white dark:bg-black border rounded-md shadow-lg flex flex-col gap-3 w-full max-w-xs"
            >
              <div className="flex justify-between gap-2">
                <div className="flex flex-col w-1/2">
                  <label className="text-xs mb-1">دقیقه</label>
                  <div className="overflow-y-auto max-h-40 border rounded-md">
                    {minutes.map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => setMinute(m)}
                        className={cn(
                          "w-full text-right px-3 py-1 hover:bg-blue-100 transition-colors",
                          minute === m ? "bg-blue-200 font-semibold" : "",
                        )}
                      >
                        {m.toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col w-1/2">
                  <label className="text-xs mb-1">ساعت</label>
                  <div className="overflow-y-auto max-h-40 border rounded-md">
                    {hours.map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setHour(h)}
                        className={cn(
                          "w-full text-right px-3 py-1 hover:bg-blue-100 transition-colors",
                          hour === h ? "bg-blue-200 font-semibold" : "",
                        )}
                      >
                        {format24
                          ? h.toString().padStart(2, "0")
                          : (h % 12 || 12).toString().padStart(2, "0")}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-start gap-2 mt-2">
                <button
                  type="button"
                  className="px-3 py-1 border rounded-full bg-gray-200 text-sm hover:bg-gray-300 transition-colors"
                  onClick={() => {
                    setHour(null);
                    setMinute(null);
                    field.onChange("");
                    setOpen(false);
                  }}
                >
                  پاک کردن
                </button>
                <button
                  type="button"
                  className="px-3 py-1 border rounded-full bg-blue-500 text-white text-sm hover:bg-blue-600 transition-colors"
                  onClick={() => {
                    field.onChange(formatTime(hour, minute));
                    setOpen(false);
                  }}
                >
                  تایید
                </button>
              </div>
            </Popover.Content>
          </Popover.Portal>
        )}
      </Popover.Root>

      <div className="text-destructive text-sm mt-1 flex items-center gap-1 min-h-[20px]">
        {error && (
          <>
            <span className="pr-1">فرمت ساعت معتبر نیست</span>
            <AlertCircle size={16} className="text-destructive" />
          </>
        )}
      </div>
    </div>
  );
}
