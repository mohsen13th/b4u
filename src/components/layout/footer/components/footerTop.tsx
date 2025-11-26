"use client";

import { useState, useEffect } from "react";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SimpleInput from "@/components/bases/inputs/SimpleInput/SimpleInput";
import { emailSchema } from "@/components/bases/inputs/zodSchema";
import FormButton from "@/components/bases/BaseButton/FormButton";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const schema = z.object({
  email: emailSchema(false),
});

type FormValues = z.infer<typeof schema>;

const FooterTop = () => {
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
    toast.success("ثبت ایمیل با موفقیت انجام شد✅", {
      style: { background: "#e6ffed", color: "#065f46" },
    });
  };

  return (
    <div className="sm:w-full w-90 h-35 border-t border-b border-sky-200">
      <FormProvider {...methods}>
        <form
          noValidate
          onSubmit={methods.handleSubmit(onSubmit)}
          className="relative flex flex-col max-w-sm mr-auto ml-5 mt-8 mb-5"
        >
          <SimpleInput
            control={methods.control}
            name="email"
            label="برای اطلاع از تخفیف‌ها و اخبار با ما همراه باشید"
            labelClassName="font-extrabold text-sky-950 mb-5"
            placeholder="لطفا ایمیل خود را وارد کنید"
            validationType="email"
            className="sm:w-96 pl-20 rounded-2xl"
          />
          <FormButton
            type="submit"
            className="mt-9.5 -left-1 absolute rounded-2xl min-w-30 text-right pl-5 bg-gray-500 hover:bg-gray-700"
            isLoading={isLoading}
            icon={<ArrowLeft className="w-5 h-5 text-right" />}
            loadingText="در حال ثبت"
          >
            ثبت
          </FormButton>
        </form>
      </FormProvider>
    </div>
  );
};

export default FooterTop;
