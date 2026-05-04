import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const currentPath = usePathname();

  const isActive = currentPath === href;
  //   console.log(href, "href");
  //   console.log(currentPath, "currentPath");
  //   console.log(isActive, "isActive");
  return (
    <div>
      <Link
        href={href}
        className={`${isActive ? "border-b-2 border-blue-500" : ""}`}
      >
        {children}
      </Link>
    </div>
  );
};

export default NavLink;
