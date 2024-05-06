"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { account, databases } from "@/app/appwrite";
import { Input } from "../ui/input";
import { Query } from "appwrite";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    router.push(`/dashboard/patients?search=${encodeURIComponent(data.search)}`)
  };

  const logout = async () => {
    await account.deleteSession("current");
  };
  return (
    <div className="flex flex-row justify-between items-center border-b border-slate-200 p-2 min-h-14">
      {open ? (
        <>
          <form onSubmit={handleSubmit(onSubmit)} className="flex items-center space-x-2">
            <Input
              className="w-[300px]"
              placeholder="Search for patients..."
              type="search"
              {...register("search", {
              })}
            />
            <Button type="submit">
              <SearchIcon className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </form>
        </>
      ) : (
        <>
          <Image src="/next.svg" alt="logo" width={70} height={100} />
          <Button
            onClick={() => {
              setOpen(true);
            }}
          >
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </>
      )}
    </div>
  );
}

export default Navbar;



function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
