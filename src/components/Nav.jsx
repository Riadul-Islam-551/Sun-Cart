"use client";

import { Button, Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import { authClient } from "@/lib/auth-client";

const Nav = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(isPending, "session");
  // console.log(user, "session");

  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/products">Products</Link>
      </li>
      <li>
        <Link href="/profile">My Profile</Link>
      </li>
    </>
  );

  return (
    <div className=" bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} alt="Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        {/* button and user info  */}

        <div className="navbar-end space-x-2">
          {isPending ? (
            <Spinner className="mr-3 " />
          ) : user ? (
            <div className="flex justify-center items-center">
              <Image
                src={user.image}
                alt={user.name}
                height={60}
                width={60}
                className="rounded-full"
                title={user.name}
              />
              <Button variant="secondary">
                <Link href="/" onClick={async () => await authClient.signOut()}>
                  Log out
                </Link>
              </Button>
            </div>
          ) : (
            <div className="space-x-2 ">
              {" "}
              <Button variant="tertiary">
                <Link href="/login">Log in</Link>
              </Button>
              <Button variant="secondary">
                <Link href="/register">Register</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
