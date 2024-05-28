"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ID, account } from "../appwrite";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

export default function Page() {
  const router = useRouter();
  const [loggedInUser, setLoggedInUser] = useState<any>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false)

  const login = async (email: any, password: any) => {
    setLoading(true)
    try {
      const session = await account.createEmailSession(email, password);
      localStorage.setItem("id", session.userId);
      setLoggedInUser(await account.get());
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error);
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  };

  const register = async () => {
    await account.create(ID.unique(), email, password, name);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setLoggedInUser(null);
  };

  // if (loggedInUser) {
  //   return (
  //     <div>
  //       <p>Logged in as {loggedInUser.name}</p>
  //       <button type="button" onClick={logout}>
  //         Logout
  //       </button>
  //     </div>
  //   );
  // }
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="px-4 max-w-2xl space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-center">Login</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="m@example.com"
              required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <Label htmlFor="password">Password</Label>
            </div>
            <Input
              id="password"
              required
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <Button disabled={loading} className="w-full" onClick={() => login(email, password)}>
            {
              loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
            }
            Login
          </Button>
         
        </div>
      </div>
    </div>
  );
}
