"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SimpleInput from "@/components/bases/inputs/SimpleInput/SimpleInput";
import {
  emailSchema,
  persianTextSchema,
  passwordSchema,
} from "@/components/bases/inputs/zodSchema";
import PasswordInput from "@/components/bases/inputs/Password/password";
import ConfirmPasswordInput from "@/components/bases/inputs/Password/confirmPassword";
import FormButton from "@/components/bases/BaseButton/FormButton";
import { toast } from "sonner";
import { registerUser } from "@/features/auth/services/register";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const schema = z.object({
  persiantext1: persianTextSchema(),
  persiantext2: persianTextSchema(),
  email: emailSchema(),
  password: passwordSchema("medium"),
  confirmPassword: z.string().min(1, "تکرار رمز عبور الزامی است"),
});

type FormValues = z.infer<typeof schema>;

const SignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      persiantext1: "",
      persiantext2: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    try {
      const res = await registerUser({
        name: `${data.persiantext1!} ${data.persiantext2!}`,
        email: data.email!,
        password: data.password!,
      });

      toast.success("ثبت نام با موفقیت انجام شد✅");

      const loginRes = await signIn("credentials", {
        redirect: false,
        username: data.email,
        password: data.password,
      });

      if (loginRes?.ok) {
        router.push("/");
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex sm:flex-row flex-col gap-10 justify-center items-center sm:w-8/12 mx-auto my-5 bg-blue-900 px-15 py-10 rounded-3xl mt-10">
      <div className="justify-center items-center relative h-[503px] w-[352px] sm:block hidden">
        <Image
          src="/landing.webp"
          alt="انتخاب برای شما"
          fill
          className=""
          loading="lazy"
        />
      </div>
      <div className="sm:w-5/12 w-60">
        <div className="flex flex-row">
          <p className="text-white font-extrabold text-center w-full">
            ثبت نام در باشگاه مشتریان
          </p>
          <Link
            href="/login"
            className="w-10 h-10 absolute sm:left-7 left-3 top-3 sm:top-7 rounded-full border border-sky-600"
          >
            <div className="w-full h-full relative">
              <ChevronLeft className="text-gray-400 absolute top-[7px] left-[7px] hover:text-white" />
            </div>
          </Link>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col mx-auto mt-5"
          >
            <SimpleInput
              control={methods.control}
              name="persiantext1"
              label="نام"
              labelClassName="text-white pr-4"
              placeholder="لطفا نام خود را وارد کنید"
              validationType="letters-persian"
              className="rounded-3xl"
            />

            <SimpleInput
              control={methods.control}
              name="persiantext2"
              label="نام خانوادگی"
              labelClassName="text-white pr-4"
              placeholder="لطفا نام خانوادگی خود را وارد کنید"
              validationType="letters-persian"
              className="rounded-3xl"
            />

            <SimpleInput
              control={methods.control}
              name="email"
              label="آدرس پست الکترونیک"
              labelClassName="text-white pr-4"
              placeholder="لطفا ایمیل خود را وارد کنید"
              validationType="email"
              className="rounded-3xl"
            />

            <PasswordInput
              control={methods.control}
              name="password"
              label="کلمه عبور"
              labelClassName="text-white pr-4"
              placeholder="لطفا کلمه عبور را وارد کنید"
              className="rounded-3xl"
            />

            <ConfirmPasswordInput
              control={methods.control}
              name="confirmPassword"
              label="تکرار کلمه عبور"
              labelClassName="text-white pr-4"
              placeholder="لطفا تکرار کلمه عبور را وارد کنید"
              className="rounded-3xl"
            />

            <FormButton
              type="submit"
              className="mt-2 bg-fuchsia-800 hover:bg-fuchsia-500 rounded-3xl"
              isLoading={isLoading}
            >
              ثبت نام
            </FormButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignUp;
