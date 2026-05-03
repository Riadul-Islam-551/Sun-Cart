"use client";

import { authClient } from "@/lib/auth-client";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const MyProfilePage = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "session");
  return (
    <div className="min-h-[80vh]">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center my-12">
        Profile Details
      </h1>
      {user && (
        <div className="max-w-md border border-gray-200 shadow-lg min-h-[60vh] flex flex-col justify-center items-center p-4 rounded-lg mx-auto">
          <Image
            src={user.image}
            alt={user.name}
            width={600}
            height={600}
            className="w-[300px]"
          />
          <h2>
            Name:{" "}
            <span className="font-semibold text-xl text-orange-400">{user.name}</span>
          </h2>
          <p className="text-lg font-medium">
            Contact Info:{" "}
            <span className="font-normal text-primary">{user.email}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
