import React from "react";
import Navbar from "./Navbar";
import BottomBar from "./BottomBar";

function index({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
      <BottomBar />
    </div>
  );
}

export default index;
