import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import DasboardContent from "./admin/manage-cars/components/DasboardContent";

const DashboardPage = async () => {
  const { userId } = await auth();

  if (!userId) {
    return redirect("/");
  }

  return <DasboardContent />;
};

export default DashboardPage;
