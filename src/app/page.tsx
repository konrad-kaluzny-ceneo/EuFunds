import ProjectList from "@/components/ProjectList";
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {

  return <div>
    <h1>Hello</h1>
    <ProjectList />
  </div>;
}
