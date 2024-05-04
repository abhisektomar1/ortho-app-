"use client";
import React from "react";
import Layout from "../../../../components/layout";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { ID, databases } from "@/app/appwrite";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function Page({params}: any) {
  console.log(params);
  
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data: any) => {
    console.log(data);
    try {
      const res = await databases.createDocument(
        "65fea4d47b9045c92723",
        "66348ae90017d1e29976",
        ID.unique(),
        {patients:params.id ,...data}
    ); 
    console.log(res);
    toast.success('Appointment Created!!');
       reset();
       router.push("/dashboard/patients")
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Layout>
      {" "}
      <section className="w-full p-4 md:p-6 lg:p-8">
        <div className="grid gap-4 md:gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Create Appointment</h1>
          </div>
          <div className="grid gap-4 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950 md:p-6 lg:p-8 mb-10">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <div className="space-y-2">
                <Label htmlFor="name">Note</Label>
                <Input
                  id="name"
                  placeholder="Enter Note"
                  {...register("note", {
                    required: true,
                  })}
                />
                {errors.note && (
                  <p className="text-red-800">Name is required</p>
                )}
              </div>
            
              <div className="space-y-2 w-full">
                <Label htmlFor="dateOfJoining">Date of Appointment</Label>
                <Input id="dateOfJoining" type="date"  {...register("date", {
                    required: true,
                  })} />
                  {errors.date && (
                  <p className="text-red-800">date is required</p>
                )}
              </div>
              <div className="flex justify-end w-full md:col-span-2 lg:col-span-1">
                <Button type="submit">Create Appointment</Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Page;