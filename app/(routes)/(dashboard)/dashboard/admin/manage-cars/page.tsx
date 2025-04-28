import React from "react";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ManageCarContent } from "./ManageCarContent";
import { isAdministrator } from "@/lib/isAdministrator";

const ManageCarsPage = async () => {
  const { userId } = await auth();

  if (!userId || !isAdministrator(userId)) {
    return redirect("/");
  }

  return <ManageCarContent />;
};

export default ManageCarsPage;
