"use client";

import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import loginLogo from "../../../assets/login-logo.png";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(true);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    // console.log({ email, password });

    const { data, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error("Login failed: " + error.message);
    }

    if (data) {
      toast.success("Login successful!");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] bg-base-200 ">
      <Form
        className="flex w-100 flex-col gap-4 border border-gray-300 p-4 rounded-2xl shadow-lg bg-transparent mx-2 "
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={handleLoginSubmit}
      >
        <Image
          src={loginLogo}
          alt="Login Logo"
          width={600}
          height={600}
          className="w-10/12 mx-auto rounded-xl mb-12  "
        />
        {/* email field  */}
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Enter your email" />
          <FieldError />
        </TextField>
        {/* password field   */}
        <TextField
          isRequired
          minLength={8}
          name="password"
          type={showPassword ? "text" : "password"}
          className="relative"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
          {/* show the password or hide the password  */}
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 top-8.5  cursor-pointer text-gray-500"
          >
            {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
          </span>
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">
            <FaCheck />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
        <div>
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <a href="/register" className="text-red-500 text-sm">
              Register
            </a>
          </p>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
