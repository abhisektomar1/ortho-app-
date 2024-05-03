"use client";
import { getAppointments } from "@/api/appointments";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { Button } from "@/components/ui/button";

function Page() {
  const [appointments, setAppointments] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  console.log(appointments);

  useEffect(() => {
    setLoading(true);
    const fetchAppointments = async () => {
      const patientsData = await getAppointments();
      setAppointments(patientsData);
      setLoading(false);
    };

    fetchAppointments();
  }, []);

  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-12">
      <div className="flex items-center justify-between mb-2">
            <h1 className="text-2xl font-bold">Appointment List</h1>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                router.push("/dashboard/addAppointment");
              }}
            >
              <PlusIcon className="h-5 w-5" />
              <span className="sr-only">Add Appointment</span>
            </Button>
          </div>
        <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
          <table className="w-full table-auto">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                  Note
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white dark:bg-gray-950">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                  April 15, 2023
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Attended the company meeting.
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                  April 10, 2023
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Submitted the quarterly report.
                </td>
              </tr>
              <tr className="bg-white dark:bg-gray-950">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                  April 5, 2023
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Discussed the new project plan.
                </td>
              </tr>
              <tr className="bg-gray-50 dark:bg-gray-900">
                <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                  April 1, 2023
                </td>
                <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                  Attended the team-building event.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}

export default Page;


function PlusIcon(props: any) {
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
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          );
        }