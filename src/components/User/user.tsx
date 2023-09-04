"use client";

import { UsersType } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

const User: FC<{ user: UsersType }> = ({ user }) => {
  return (
    <div className="p-4 w-full border rounded-lg">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <Image
          src="https://dummyimage.com/201x201"
          alt={user.email}
          className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
        />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-900">
            {user.name.firstname.toUpperCase()}
            {user.name.lastname.toUpperCase()}
          </h2>
          <h3 className="text-sky-500 mb-3">
            <Link href="/our-team">{user.email}</Link>
          </h3>
          <p className="mb-2">
            <span className="font-semibold me-2">Address:</span> "
            {user.address.city}", № {user.address.number}
          </p>
          <p className="mb-2">
            <span className="font-semibold me-2">ZipCode:</span>
            {user.address.zipcode}
          </p>
          <p className="mb-2">
            <span className="font-semibold me-2">Username:</span>
            {user.username}
          </p>
          <p className="mb-2">
            <span className="font-semibold me-2">Password:</span>
            {user.password}
          </p>
        </div>
      </div>
    </div>
  );
};

export default User;
