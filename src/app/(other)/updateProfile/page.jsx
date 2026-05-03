"use client";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import { FaCheck } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";

const UpdateProfilePage = () => {
  const handleUpdateProfileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const image = formData.get("image");

    const { data, error } = await authClient.updateUser({
      image: image,
      name: name,
    });

    if (error) {
      toast.error("Profile update failed");
    }
    if (data) {
      toast.success("Profile updated successfully!");
      redirect("/profile");
    }
    // console.log({ data, error });
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] bg-base-200 ">
      <Form
        className="flex w-100 flex-col gap-4 border border-gray-300 p-4 rounded-2xl shadow-lg bg-transparent mx-2 my-12 "
        render={(props) => <form {...props} data-custom="foo" />}
        onSubmit={handleUpdateProfileSubmit}
      >
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
      </Form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfilePage;
