import { FieldValues, Control, Path } from "react-hook-form";

export type SimpleInputProps<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  labelClassName?:string;
};

export type ValidationType =
  | "text-persian"
  | "text-english"
  | "letters-persian"
  | "letters-english"
  | "username"
  | "email"
  | "password"
  | "number"
  | "decimal"
  | "url"
  | "date"
  | "time"
  | "text";
