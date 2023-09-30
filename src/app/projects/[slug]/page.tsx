import { notFound } from "next/navigation";
import { db } from "@/lib/db";
import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { slug } = params;
  const id = parseInt(slug);

  const project = await db.project.findUnique({
    where: {
      id: id,
    },
  });

  if (!project) {
    return notFound();
  }

  return (
    <div>
      <h1>{project.program}</h1>
      <p>{project.opisProjektu}</p>
    </div>
  );
}
