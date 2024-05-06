
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"

export function Component() {
  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card className="flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <UsersIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">3,456</div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Today`s Appointments</CardTitle>
            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-bold">24</div>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Appointments</CardTitle>
            <CalendarIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">John Doe</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">10:00 AM</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Jane Smith</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">11:30 AM</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Bob Johnson</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">2:00 PM</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">New Patients</CardTitle>
            <UserPlusIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div className="font-medium">Sarah Lee</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Registered 2 days ago</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Michael Chen</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Registered 4 days ago</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="font-medium">Emily Nguyen</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Registered 6 days ago</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

function CalendarIcon(props : any) {
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
    </svg>
  )
}


function UserPlusIcon(props : any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <line x1="19" x2="19" y1="8" y2="14" />
      <line x1="22" x2="16" y1="11" y2="11" />
    </svg>
  )
}


function UsersIcon(props : any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}
