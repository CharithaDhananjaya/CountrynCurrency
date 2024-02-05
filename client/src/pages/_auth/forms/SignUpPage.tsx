import { Link, useNavigate } from "react-router-dom";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "../../../components/ui/button";
import {
  Form,
  FormControl,
  //FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../components/ui/form";
import { Input } from "../../../components/ui/input";

import { signUpSchema } from "../../../lib/validations/index";

function SignUpPage() {
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  // 2. Submition
  function onSubmit(values: z.infer<typeof signUpSchema>) {
    console.log("email", values.email, values.password);
    navigate("/user");
  }

  return (
    <>
      <Form {...form}>
        <div className="flex flex-col text-center item-center">
          <h1 className="pt-5 text-xl font-bold md:text-4xl">Sign Up</h1>
          <p className="mt-2 text-sm font-light md:text-md text-wrap">
            Create an Account to use and test the platform
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-1 mt-2 md:w-8/12"
        >
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="Carl" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Anderson" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="canderson@ca.com"
                    {...field}
                    className=""
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} className="" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button className="self-center w-3/5 mt-4" type="submit">
            Submit
          </Button>
          <div className="flex flex-row items-center justify-center gap-3 mt-2 text-gray-500 md:justify-end ">
            <span className="text-xs font-normal">
              Already have an account?
            </span>
            <Link
              to="/"
              className="text-xs font-medium underline underline-offset-1 hover:text-gray-800"
            >
              Sign-in here
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}

export default SignUpPage;
