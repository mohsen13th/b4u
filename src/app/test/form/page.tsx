"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SimpleInput from "@/components/bases/inputs/SimpleInput/SimpleInput";
import {
  emailSchema,
  englishNumberSchema,
  persianTextSchema,
  datePickerSchema,
  decimalNumberSchema,
  englishTextSchema,
  iranNationalIdSchema,
  iranMobileSchema,
  postalCodeSchema,
  OTPSchema,
  passwordSchema,
  amountSchema,
  checkboxSchema,
  radioSchema,
  timePickerSchema,
} from "@/components/bases/inputs/zodSchema";

import AmountInput from "@/components/bases/inputs/AmountInput/AmountInput";
import PasswordInput from "@/components/bases/inputs/Password/password";
import DateInput from "@/components/bases/inputs/DatepickerInput/DatepickerInput";
import SimpleTextarea from "@/components/bases/inputs/Textarea/Textarea";
import SimpleCheckbox from "@/components/bases/inputs/Checkbox/Checkbox";
import SimpleRadio from "@/components/bases/inputs/RadioButton/RadioButton";
import ToggleTest from "./components/toggleTest";
import FormButton from "@/components/bases/BaseButton/FormButton";
import { toast } from "sonner";
import OTPInput from "@/components/bases/inputs/OtpInput/OtpInput";
import ConfirmPasswordInput from "@/components/bases/inputs/Password/confirmPassword";
import TimeInput from "@/components/bases/inputs/DatepickerInput/TimeInput";

const schema = z.object({
  persiantext1: persianTextSchema(),
  persiantext2: persianTextSchema(),
  persiantext3: persianTextSchema(false),
  englishNumber1: englishNumberSchema(true, 4),
  email: emailSchema(),
  email2: emailSchema(false),
  date1: datePickerSchema(),
  date2: datePickerSchema(),
  time1: timePickerSchema(),
  time2: timePickerSchema(),
  decimal1: decimalNumberSchema(),
  engText1: englishTextSchema(),
  nationalId1: iranNationalIdSchema(),
  mobile1: iranMobileSchema(),
  postalCode1: postalCodeSchema(),
  opt1: OTPSchema(4),
  password: passwordSchema("medium"),
  confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
  amount1: amountSchema(),
  description: persianTextSchema(),
  newsletter: checkboxSchema(),
  agreeToTerms: checkboxSchema(),
  selectColor: radioSchema(["red", "green", "purple", "gold"] as const),
});

type FormValues = z.infer<typeof schema>;

const EmailForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      email2: "",
      persiantext1: "",
      persiantext2: "",
      persiantext3: "",
      englishNumber1: "",
      date1: undefined as unknown as Date | undefined,
      date2: undefined as unknown as Date | undefined,
      decimal1: "",
      engText1: "",
      nationalId1: "",
      mobile1: "",
      postalCode1: "",
      opt1: "",
      password: "",
      confirmPassword: "",
      amount1: "",
      description: "",
      newsletter: false,
      agreeToTerms: true,
      selectColor: undefined,
    },
    mode: "onBlur",
  });

  const radioOption = [
    { label: "قرمز", value: "red" },
    { label: "سبز", value: "green", disabled: true },
    { label: "بنفش", value: "purple" },
    { label: "طلایی", value: "gold", locked: true },
  ];

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    toast.success("ثبت نام با موفقیت انجام شد✅", {
      description: data.toString,
      style: { background: "#e6ffed", color: "#065f46" },
    });
  };

  return (
    <FormProvider {...methods}>
      <form
        noValidate
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col max-w-sm mx-auto mt-10 mb-10"
      >
        <SimpleInput
          control={methods.control}
          name="persiantext1"
          label="نام"
          placeholder="لطفا نام خود را وارد کنید"
          validationType="letters-persian"
        />
        <SimpleInput
          control={methods.control}
          name="persiantext2"
          label="نام خانوادگی"
          placeholder="لطفا نام خانوادگی خود را وارد کنید"
          validationType="letters-persian"
        />
        <SimpleInput
          control={methods.control}
          name="persiantext3"
          label="شغل"
          placeholder="لطفا شغل خود را وارد کنید"
          validationType="letters-persian"
        />
        <SimpleInput
          control={methods.control}
          name="englishNumber1"
          label="حقوق ماهیانه به تومان"
          placeholder="لطفا حقوق ماهیانه خود را وارد کنید"
          validationType="number"
        />
        <SimpleInput
          control={methods.control}
          name="email"
          label="ایمیل شخصی"
          placeholder="لطفا ایمیل خود را وارد کنید"
          validationType="email"
        />
        <SimpleInput
          control={methods.control}
          name="email2"
          label="ایمیل سازمانی"
          placeholder="لطفا ایمیل سازمانی خود را وارد کنید"
          validationType="email"
        />
        <DateInput
          control={methods.control}
          name="date1"
          label="تاریخ تولد"
          placeholder="لطفا تاریخ تولد خود را وارد کنید"
          ignoreToday={true}
        />
        <DateInput
          control={methods.control}
          name="date2"
          label="تاریخ همکاری"
          placeholder="لطفا تاریخ همکاری خود را وارد کنید"
          ignoreToday={true}
        />
        <TimeInput
          control={methods.control}
          name="time1"
          label="ساعت شروع کار"
          placeholder="ساعت شروع را انتخاب کنید"
          required
        />

        <TimeInput
          control={methods.control}
          name="time2"
          label="ساعت پایان"
          placeholder="ساعت پایان را انتخاب کنید"
          required
        />

        <SimpleInput
          control={methods.control}
          name="decimal1"
          label="معدل لیسانس"
          placeholder="لطفا معدل لیسانس خود را وارد کنید"
          validationType="decimal"
        />
        <SimpleInput
          control={methods.control}
          name="engText1"
          label="نام انگلیسی"
          placeholder="لطفا نام انگلیسی خود را وارد کنید"
          validationType="letters-english"
        />
        <SimpleInput
          control={methods.control}
          name="nationalId1"
          label="کد ملی"
          placeholder="لطفا کد ملی خود را وارد کنید"
          validationType="number"
        />
        <SimpleInput
          control={methods.control}
          name="mobile1"
          label="شماره موبایل"
          placeholder="لطفا شماره موبایل خود را وارد کنید"
          validationType="number"
        />
        <SimpleInput
          control={methods.control}
          name="postalCode1"
          label="کد پستی"
          placeholder="لطفا کد پستی خود را وارد کنید"
          validationType="number"
        />
        <OTPInput control={methods.control} name="opt1" label="کد تایید" />
        <PasswordInput
          control={methods.control}
          name="password"
          label="کلمه عبور"
          placeholder="لطفا کلمه عبور را وارد کنید"
        />
        <ConfirmPasswordInput
          control={methods.control}
          name="confirmPassword"
          label="تکرار کلمه عبور"
          placeholder="لطفا تکرار کلمه عبور را وارد کنید"
        />
        <AmountInput
          control={methods.control}
          name="amount1"
          label="مبلغ وام به تومان"
          placeholder="لطفا مبلغ وام را وارد کنید"
          unit="تومان"
        />
        <SimpleTextarea
          control={methods.control}
          name="description"
          label="توضیحات"
          validationType="text-persian"
        />
        <SimpleRadio
          control={methods.control}
          name="selectColor"
          options={radioOption}
          className="my-radio-group"
          label="یک طرح را انتخاب کنید"
        />
        <SimpleCheckbox
          control={methods.control}
          name="newsletter"
          label="مایلم خبرنامه را دریافت کنم"
        />
        <SimpleCheckbox
          control={methods.control}
          name="agreeToTerms"
          label="شرایط و قوانین را می‌پذیرم"
          locked={true}
        />
        <ToggleTest />
        <FormButton type="submit" className="mt-2" isLoading={isLoading}>
          ثبت اطلاعات
        </FormButton>
      </form>
    </FormProvider>
  );
};

export default EmailForm;
