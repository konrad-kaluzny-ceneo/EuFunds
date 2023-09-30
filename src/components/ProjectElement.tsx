'use client'

import { Project } from '@prisma/client'
import React from 'react'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import Image from 'next/image'

type Props = {
    project: Project
}

export default async function ProjectElement({project}: Props) {

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-5">
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{project.program}</h4>
            <h5 className="text-small tracking-tight text-default-400">{project.beneficient}</h5>
            <Image src={project.thumbnailImageUrl} alt="logo" width={100} height={100} />
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-default-400">
        <p>
            {project.opisProjektu}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{project.project_value}</p>
          <p className=" text-default-400 text-small">Wartość projektu</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">{project.cofinancing_value}</p>
          <p className="text-default-400 text-small">Wartość współfinansowania</p>
        </div>
      </CardFooter>
    </Card>
  )
}