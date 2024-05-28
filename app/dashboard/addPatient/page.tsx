"use client";
import React, { useState } from "react";
import Layout from "../../../components/layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { ID, databases } from "@/app/appwrite";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

function Page() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    setLoading(true);

    try {
      const res = await databases.createDocument(
        "65fea4d47b9045c92723",
        "663343050009b88b486e",
        ID.unique(),
        data
      );
      toast.success("Patient Created!!");
      reset();
      router.push("/dashboard/patients");
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      {" "}
      <section className="w-full p-4 md:p-6 lg:p-8">
        <div className="grid gap-4 md:gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Create Patient</h1>
          </div>
          <div className="grid gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950 md:p-6 lg:p-8 mb-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  placeholder="Enter name"
                  {...register("name", {
                    required: true,
                  })}
                />
                {errors.name && (
                  <p className="text-red-800">Name is required</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="age">Age</Label>
                <Input
                  id="age"
                  placeholder="Enter age"
                  type="number"
                  {...register("age", {
                    required: true,
                  })}
                />
                {errors.age && (
                  <p className="text-red-800">Age name is required</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="opdNo">OPD No.</Label>
                <Input
                  id="opdNo"
                  placeholder="Enter OPD number"
                  {...register("opdNo", {
                    required: true,
                  })}
                />
                {errors.opdNo && (
                  <p className="text-red-800">Opd No. is required</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobileNo">Mobile No.</Label>
                <Input
                  id="mobileNo"
                  placeholder="Enter mobile number"
                  {...register("mobileNo", {
                    required: true,
                  })}
                />
                {errors.mobileNo && (
                  <p className="text-red-800">Mobile No is required</p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Sex</Label>
                <select
                  id="sex"
                  className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:ring-offset-gray-950 dark:placeholder:text-gray-400 dark:focus-visible:ring-gray-300"
                  {...register("sex", {
                    required: true,
                  })}
                >
                  <option value={"male"}>male</option>
                  <option value={"female"}>female</option>
                  <option value={"other"}>other</option>
                </select>
                {errors.sex && <p className="text-red-800">Sex is required</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Address</Label>
                <Input
                  id="location"
                  placeholder="Enter Address"
                  {...register("location", {
                    required: true,
                  })}
                />
                {errors.location && (
                  <p className="text-red-800">Address is required</p>
                )}
              </div>
              <div className="space-y-2 w-full">
                <Label htmlFor="dateOfJoining">Date of Joining</Label>
                <Input
                  id="dateOfJoining"
                  type="date"
                  {...register("doj", {
                    required: true,
                  })}
                />
                {errors.doj && (
                  <p className="text-red-800">date of joining is required</p>
                )}
              </div>
              <div className="flex justify-end w-full md:col-span-2 lg:col-span-1">
                <Button disabled={loading} type="submit">
                  {" "}
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Create Patient
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;
