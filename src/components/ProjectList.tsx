import { db } from '@/lib/db'
import React from 'react'
import ProjectElement from './ProjectElement';
import { Project } from '@prisma/client';

type Props = {}

export default async function ProjectList({ }: Props) {
  const projects: Project[] = await db.project.findMany({
    orderBy: {
      program: 'asc'
    },
    take: 10,
    skip: 10,
  });

  return (
    <div>
      <h2>Projects</h2>
      <div className='columns-1 md:columns-3'>
        {projects.map((project: Project) => (
          <ProjectElement project={project} key={project.id}/>
        ))}
      </div>
    </div>
  )
}