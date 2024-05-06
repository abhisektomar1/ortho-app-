"use client";
import { getAppointments } from "@/api/appointments";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function Page() {
  const [appointments, setAppointments] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState("");
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchAppointments = async () => {
      const patientsData = await getAppointments();
      setAppointments(patientsData);
      setLoading(false);
    };
    fetchAppointments();
  }, []);

  const filteredAppointments = selectedDate
  ? appointments.filter((app: any) => {
      const appDate = new Date(app.date);
      const selected = new Date(selectedDate);
      return appDate.toDateString() === selected.toDateString();
    })
  : appointments;


  return (
    <Layout>
      <div className="px-4 py-6 md:px-6 md:py-12 mb-12">
        <div className="flex items-center justify-between mb-2 gap-1">
          <h1 className="text-2xl font-bold">Appointments</h1>

          <Input
            id="dateOfJoining"
            type="date"
            className="max-w-min	"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
        {loading ? (
          <>
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="animate-pulse">
                  <div className="bg-gray-200 dark:bg-gray-800 h-12 rounded-t-lg" />
                  <div className="p-4 space-y-4">
                    <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-full" />
                    <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-full" />
                    <div className="bg-gray-200 dark:bg-gray-800 h-4 rounded w-full" />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
              <table className="w-full table-auto">
                <thead className="bg-gray-100 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                      Patient
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-500 dark:text-gray-400">
                      Note
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAppointments?.map((app: any) => {
                    const dateObject = new Date(app.date);
                    const formattedDate = dateObject.toLocaleDateString();
                    return (
                      <>
                        <tr className="bg-white dark:bg-gray-950">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-gray-50">
                            {formattedDate}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                            {app.patients.name}
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-400">
                            {app.note}
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </>
        )}
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
