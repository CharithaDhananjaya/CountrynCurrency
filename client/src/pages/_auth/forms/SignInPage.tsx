import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../../hooks/useAuth";

import { gql, useLazyQuery } from "@apollo/client";

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

import { signInSchema } from "../../../lib/validations/index";

function SignInForm() {
  const { login } = useAuth();

  const navigate = useNavigate();

  const USER_SIGNIN = gql`
    query UserSignIn($userCredentials: inputUser) {
      userSignIn(userCredentials: $userCredentials) {
        firstName
        lastName
        message
        token
        userId
        validity
      }
    }
  `;
  const [userSignIn, { loading, error, data }] = useLazyQuery(USER_SIGNIN, {
    // fetchPolicy: "no-cache",
    // notifyOnNetworkStatusChange: true,
    onCompleted: async (data) => {
      if (data.userSignIn.message === "USER_NOT_FOUND") {
        //localStorage.clear();
        alert("Invalid Email");
        navigate("/");
      } else if (data.userSignIn.message === "INVALID_PASSWORD") {
        //localStorage.clear();
        alert("Invalid Password");
        navigate("/");
      } else {
        await login(data.userSignIn);
        // localStorage.clear();
        // localStorage.setItem("authUser", JSON.stringify(data.userSignIn));
        navigate("/user");
      }
    },
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Submition
  async function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log("email", values.email, values.password);
    userSignIn({
      variables: {
        userCredentials: {
          email: values.email,
          password: values.password,
        },
      },
    });
  }

  return (
    <>
      <Form {...form}>
        <div className="flex flex-col text-center item-center">
          <h1 className="pt-5 text-xl font-bold md:text-4xl">Sign In</h1>
          <p className="mt-2 font-light text-md md:text-md text-wrap">
            to use and test the platform
          </p>
        </div>

        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full gap-2 mt-4 md:w-8/12"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} className="" />
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

          <Button className="self-center w-3/5 mt-4" type="submit">
            Sign In
          </Button>
          <div className="flex flex-row items-center justify-center gap-3 mt-2 text-gray-500 md:justify-end ">
            <span className="text-sm font-medium underline underline-offset-1 hover:text-gray-800">
              Forgot Password?
            </span>
          </div>
          <div className="flex flex-row items-center justify-center gap-3 text-gray-500 md:justify-end ">
            <span className="text-sm font-normal">Don't have an Account?</span>
            <Link
              to="/sign-up"
              className="text-sm font-medium underline underline-offset-1 hover:text-gray-800"
            >
              Register here
            </Link>
          </div>
        </form>
      </Form>
    </>
  );
}

export default SignInForm;
