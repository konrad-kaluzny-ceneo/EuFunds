import { Session } from "next-auth";
import { getAuthSession } from "@/lib/auth";
import MyNavbar from "./MyNavbar";

export default async function MyNavbarProvider() {
  const session: Session | null = await getAuthSession();

  return (
    <MyNavbar session={session} />
  );
}
