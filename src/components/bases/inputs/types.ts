import { FieldValues, Control, Path } from "react-hook-form";

export type SimpleInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};

export type AmountInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  unit: string;
};

export type SimpleTextareaProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  rows?: number;
  validationType?: ValidationType;
};

export type SimpleCheckboxProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  locked?: boolean;
  className?: string;
};

export type SimpleRadioOption = {
  label: string;
  value: string | number;
  disabled?: boolean;
  locked?: boolean;
};

export type SimpleRadioProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  options: SimpleRadioOption[];
  className?: string;
};

export type OTPInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  disabled?: boolean;
  otpLength?: number;
  onComplete?: (code: string) => void;
};

export type ValidationType =
  | "text-persian"
  | "text-english"
  | "letters-persian"
  | "letters-english"
  | "email"
  | "password"
  | "number"
  | "decimal"
  | "url"
  | "date"
  | "time"
  | "text";

export interface DatePickerRef {
  openCalendar?: () => void;
  closeCalendar?: () => void;
}

export interface TimeInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  format24?: boolean;
  required?: boolean;
}
