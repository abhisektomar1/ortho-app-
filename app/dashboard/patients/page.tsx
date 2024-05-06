"use client";
import { Button } from "@/components/ui/button";
import Layout from "../../../components/layout";
import { databases } from "@/app/appwrite";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input"
import { Query } from "appwrite";


export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search');

  const [patients, setPatients] = useState<any>(null);
  
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  

  useEffect(() => {
    setLoading(true);

    const fetchPatients = async () => {
      const patientsData = await getPatients(search); // Pass the search parameter to getPatients
      setPatients(patientsData);
      localStorage.setItem("patients", patientsData.length as any)
      setLoading(false);
    };

    fetchPatients();
  }, [search]); // Include search in the dependency array

  const getPatients = async (search: string | null) => {
    try {
      const queryOptions = [
        Query.orderDesc('$createdAt')
      ];

      if (search) {
        queryOptions.push(Query.search('name', search));
      }

      const response = await databases.listDocuments(
        "65fea4d47b9045c92723",
        "663343050009b88b486e",
        queryOptions
      );

      return response.documents;
    } catch (error) {
      console.error('Error fetching patients:', error);
      return [];
    }
  };                
  

  return (
    <Layout>
      <section className="w-full p-4 md:p-6 lg:p-8 mb-12">
        <div className="grid gap-4 md:gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Patient List</h1>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                router.push("/dashboard/addPatient");
              }}
              className="dark:bg-white"
            >
              <PlusIcon className="h-5 w-5 "  />
              <span className="sr-only">Add Patient</span>
            </Button>
          </div>
          <div className="grid gap-4">
          
            {loading ? (
              <>
                <div className="grid gap-2 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="grid gap-2 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950 animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-16 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="h-5 w-32 rounded-md bg-gray-200 dark:bg-gray-700" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-12 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {patients?.map((patient: any, index: any) => {
                  const dateObject = new Date(patient.doj);
                  const formattedDate = dateObject.toLocaleDateString();
                  return (
                    <div
                      key={index}
                      className="grid gap-2 rounded-lg bg-white p-4 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-950"
                    onClick={() => {
                      router.push(`/dashboard/${patient.$id}`);
                    }}>
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          Opd No-{patient.opdNo}
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDaysIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {formattedDate}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="font-semibold dark:text-gray-400">{patient.name}</div>
                        <div className="flex items-center gap-2">
                          <PhoneIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {patient.mobileNo}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <CalendarDaysIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {patient.age}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <LocateIcon className="h-4 w-4 text-gray-500 dark:text-gray-400" />
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {patient.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}


function Search() {
  return (
    <>
        <form className="flex items-center space-x-2">
          <Input className="flex-1" placeholder="Search for anything..." type="search" />
          <Button>
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Button>
        </form>
        {/* <div className="flex flex-col items-center justify-center space-y-2">
          <SearchIcon className="h-12 w-12 text-gray-400" />
          <p className="text-gray-500 dark:text-gray-400">No results found</p>
        </div> */}
        </>
  )
}


function CalendarDaysIcon(props: any) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}

function LocateIcon(props: any) {
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
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function PhoneIcon(props: any) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

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
  )
}