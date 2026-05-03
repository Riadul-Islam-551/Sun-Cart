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
import React from "react";
import { FaCheck } from "react-icons/fa";
import registrationLogo from "../../../assets/registration-logo.png";
import { authClient } from "@/lib/auth-client";
import { ToastContainer, toast } from "react-toastify";

const RegisterPage = () => {
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

    console.log({ data, error });

    if (error) {
      toast.error("Registration failed: " + error.message);
    }
    if (data) {
      toast.success("Create account successfully! ");
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
          type="password"
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
