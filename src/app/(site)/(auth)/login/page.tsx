"use client";

import { useState, useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import SimpleInput from "@/components/bases/inputs/SimpleInput/SimpleInput";
import {
  emailSchema,
  passwordSchema,
} from "@/components/bases/inputs/zodSchema";

import PasswordInput from "@/components/bases/inputs/Password/password";
import FormButton from "@/components/bases/BaseButton/FormButton";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const schema = z.object({
  username: emailSchema(),
  password: passwordSchema("medium"),
});

type FormValues = z.infer<typeof schema>;

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user?.accessToken) {
      localStorage.setItem("authtoken", session.user.accessToken);
    }
  }, [session]);

  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      username: data.username,
      password: data.password,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("ورود با موفقیت انجام شد✅");
      if (res?.ok) {
        router.push("/");
      }
    }
    setIsLoading(false);
  };

  return (
    <div className="relative flex sm:flex-row flex-col gap-10 justify-center items-center sm:w-8/12 mx-auto my-5 bg-blue-900 px-15 py-13 rounded-3xl">
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
            ورود به باشگاه مشتریان
          </p>
          <Link href="/" className="w-10 h-10 absolute sm:left-7 left-3 top-3 sm:top-7 rounded-full border border-sky-600">
            <div className="w-full h-full relative">
                <ChevronLeft className="text-gray-400 absolute top-[7px] left-[7px] hover:text-white" />
            </div>
          </Link>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex flex-col  mx-auto mt-10"
          >
            <SimpleInput
              control={methods.control}
              name="username"
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
            <FormButton
              type="submit"
              className="mt-2 bg-fuchsia-800 hover:bg-fuchsia-500 rounded-3xl"
              isLoading={isLoading}
            >
              ورود
            </FormButton>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Login;
