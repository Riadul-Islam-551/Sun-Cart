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
import registrationLogo from "../../../assets/registration-logo.png";
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from "react-toastify";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log({ name, image, email, password });

    const { data, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
      callbackURL: "/",
    });

    // console.log({ data, error });

    if (error) {
      toast.error("Registration failed: " + error.message);
    }
    if (data) {
      toast.success("Create account successfully! ");
    }
  };

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    // console.log({ data });
    if (data?.error) {
      toast.error("Google Sign-In failed ");
    }
    if (data?.data) {
      toast.success("Google Sign-In successful!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 ">
      <Form
        className="flex w-100 flex-col gap-4 border border-gray-300 p-4 rounded-2xl shadow-lg bg-transparent mx-2 my-12 "
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={handleRegistrationSubmit}
      >
        <Image
          src={registrationLogo}
          alt="Registration"
          width={600}
          height={600}
          className="w-8/12 mx-auto rounded-xl mb-12  "
        />
        {/* name field  */}
        <TextField
          isRequired
          name="name"
          type="text"
          validate={(value) => {
            if (value.length < 3) {
              return "Name must be at least 3 characters";
            }
            return null;
          }}
        >
          <Label>Name</Label>
          <Input placeholder="Enter your name" />
          <FieldError />
        </TextField>
        {/* image url field  */}
        <TextField isRequired name="image" type="text">
          <Label>Image Url</Label>
          <Input placeholder="Enter your image url" />
          <FieldError />
        </TextField>
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
        {/* password field  */}
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
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </span>
        </TextField>

        {/* google login button   */}
        <button
          className="btn bg-white text-black border-[#e5e5e5] "
          onClick={handleGoogleSignin}
        >
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>

        {/* submit button  */}
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
            Do you have an account?{" "}
            <a href="/login" className="text-red-500 text-sm">
              Login
            </a>
          </p>
        </div>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default RegisterPage;
