import * as z from "zod";

const persianRegex = /^[\u0600-\u06FF\s]+$/;
const englishNumberRegex = /^[0-9]+$/;
const decimalNumberRegex = /^-?\d*(\.\d+)?$/;
const iranMobileRegex = /^09\d{9}$/;
const postalCodeRegex = /^[1-9]\d{9}$/;
const EnglishTextregex = /^[A-Za-z\s]+$/;

export const emailSchema = (isRequired = true) => {
  const base = z.string().min(1, "ایمیل الزامی است").email("فرمت ایمیل نادرست است");
  return isRequired ? base.min(1, "ایمیل الزامی است") : base.optional().or(z.literal(""));
};

export const persianTextSchema = (isRequired = true) => {
  const base = z
    .string()
    .min(2, "این فیلد نباید خالی باشد")
    .regex(persianRegex, "لطفاً فقط از حروف فارسی استفاده کنید");
  if (isRequired) {
    return base.min(2, "این فیلد نباید خالی باشد");
  }
  return base.optional().or(z.literal(""));
};

export const englishNumberSchema = (isRequired = true, minLength?: number) => {
  const base = z
    .string()
    .min(minLength || 1, `حداقل ${minLength} کاراکتر لازم است` || "این فیلد نباید خالی باشد")
    .regex(englishNumberRegex, "لطفاً فقط از اعداد انگلیسی استفاده کنید");
  if (isRequired) {
    return base.min(
      minLength || 1,
      `حداقل ${minLength} کاراکتر لازم است` || "این فیلد نباید خالی باشد",
    );
  }
  return base.optional().or(z.literal(""));
};

export const persianDateSchema = (separator = "/", isRequired = true) => {
  const safeSeparator = separator.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(
    `^(13|14)\\d{2}${safeSeparator}(0[1-9]|1[0-2])${safeSeparator}(0[1-9]|[12]\\d|3[01])$`,
  );
  const base = z
    .string()
    .min(1, "تاریخ الزامی است")
    .regex(regex, "تاریخ وارد شده معتبر نیست (مثلاً 1403/07/25)");
  return isRequired ? base.min(1, "تاریخ الزامی است") : base.optional().or(z.literal(""));
};

export const decimalNumberSchema = (isRequired = true) => {
  const base = z
    .string()
    .min(1, "این فیلد نباید خالی باشد")
    .regex(decimalNumberRegex, "اعداد صحیح یا اعشار وارد کنید");
  return isRequired ? base.min(1, "این فیلد نباید خالی باشد") : base.optional().or(z.literal(""));
};

export const englishTextSchema = (isRequired = true) => {
  const base = z.string().regex(EnglishTextregex, "لطفاً فقط از حروف انگلیسی استفاده کنید");

  return isRequired ? base.min(1, "این فیلد نباید خالی باشد") : base.optional().or(z.literal(""));
};

export const iranNationalIdSchema = (isRequired = true) => {
  const base = z
    .string()
    .min(1, "کد ملی الزامی است")
    .regex(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد")
    .refine((val) => {
      if (!/^\d{10}$/.test(val)) return false;
      const check = +val[9];
      const sum =
        val
          .split("")
          .slice(0, 9)
          .reduce((acc, cur, i) => acc + +cur * (10 - i), 0) % 11;
      return (sum < 2 && check === sum) || (sum >= 2 && check === 11 - sum);
    }, "کد ملی نامعتبر است");

  return isRequired ? base : base.optional().or(z.literal(""));
};

export const iranMobileSchema = (isRequired = true) => {
  const base = z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(iranMobileRegex, "شماره موبایل معتبر نیست (مثلاً 09121234567)");

  return isRequired ? base.min(1, "شماره موبایل الزامی است") : base.optional().or(z.literal(""));
};

export const postalCodeSchema = (isRequired = true) => {
  const base = z
    .string()
    .min(1, "کد پستی الزامی است")
    .regex(postalCodeRegex, "کد پستی باید ۱۰ رقم و بدون صفر در ابتدای آن باشد");

  return isRequired ? base.min(1, "کد پستی الزامی است") : base.optional().or(z.literal(""));
};

export const OTPSchema = (length = 6, isRequired = true) => {
  const regex = new RegExp(`^\\d{${length}}$`);
  const base = z
    .string()
    .min(length, `کد باید ${length} رقم باشد`)
    .regex(regex, `کد باید ${length} رقم باشد`);

  return isRequired ? base : base.optional().or(z.literal(""));
};

export const passwordSchema = (
  strength: "simple" | "medium" | "strong" | "hard" = "medium",
  minLength: number = 8,
) => {
  let regex: RegExp;
  let message: string;

  const allowedChars = "A-Za-z\\d!@#$%^&*()_+\\-=[\\]{};':\"\\\\|,.<>/?";

  switch (strength) {
    case "hard":
      regex = new RegExp(
        `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};':"\\\\|,.<>/?])[${allowedChars}]{${minLength},}$`,
      );
      message = `کلمه عبور باید حداقل ${minLength} کاراکتر و شامل حروف بزرگ، کوچک، عدد و نماد انگلیسی باشد`;
      break;

    case "strong":
      regex = new RegExp(
        `^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*()_+\\-=[\\]{};':"\\\\|,.<>/?])[${allowedChars}]{${minLength},}$`,
      );
      message = `کلمه عبور باید حداقل ${minLength} کاراکتر و شامل حروف، عدد و نماد انگلیسی باشد`;
      break;

    case "medium":
      regex = new RegExp(`^(?=.*[A-Za-z])(?=.*\\d)[${allowedChars}]{${minLength},}$`);
      message = `کلمه عبور باید حداقل ${minLength} کاراکتر و شامل حروف و عدد انگلیسی باشد`;
      break;

    default:
      regex = new RegExp(`^[${allowedChars}]{${minLength},}$`);
      message = `کلمه عبور باید حداقل ${minLength} کاراکتر و فقط شامل کاراکترهای انگلیسی باشد`;
  }

  return z.string().min(minLength, message).regex(regex, message);
};

export const confirmPasswordSchema = () => {
  z.string().min(1, "تکرار رمز عبور الزامی است");
};

export const amountSchema = (isRequired = true) => {
  const base = z.any();
  return isRequired
    ? base.refine((val) => val !== undefined && val !== null && val !== "", {
        message: "مبلغ وارد کنید",
      })
    : base.optional();
};

export const datePickerSchema = (isRequired = true) => {
  const base = z.instanceof(Date, { message: "فرمت تاریخ معتبر نیست" });

  return isRequired ? base : base.optional();
};

export const timePickerSchema = (isRequired = true) => {
  const base = z
    .string()
    .min(isRequired ? 1 : 0, { message: "وارد کردن ساعت الزامی است" })
    .regex(/^([01]\d|2[0-3]):([0-5]\d)$/, {
      message: "فرمت ساعت معتبر نیست (HH:mm)",
    });

  return isRequired ? base : base.optional();
};

export const checkboxSchema = (isRequired = true, errorMessage = "تیک این گزینه الزامی است") => {
  const base = z
    .boolean()
    .catch(false)
    .transform((val) => !!val);

  return isRequired ? base.refine((val) => val === true, { message: errorMessage }) : base;
};

export const radioSchema = <T extends readonly string[]>(
  options: T,
  isRequired = true,
  errorMessage = "انتخاب یک گزینه الزامی است",
) => {
  const isOneOf = (val: unknown) =>
    typeof val === "string" && (options as readonly string[]).includes(val);

  if (isRequired) {
    return z
      .union([z.string(), z.undefined()])
      .refine((val) => isOneOf(val), { message: errorMessage });
  }

  return z
    .union([z.string(), z.undefined()])
    .refine((val) => val === undefined || isOneOf(val), { message: errorMessage });
};
