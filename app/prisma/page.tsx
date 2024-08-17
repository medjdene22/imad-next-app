import React from 'react'
import prisma from '../utils/db'

const getAllTasks = async (content : string) => {
  await prisma.task.create({
    data:{
      content: content
    }
  })
  const allTasks = await prisma.task.findMany();
  return allTasks;
}



export default async function Prisma() {
  const tasks = await getAllTasks("buy milk");

  return (
    <div>
      <h1 className='text-7xl'>Tasks</h1>
      {tasks.map((task)=>(
        <h2 key={task.id} className='text-xl py-2'>{task.content}</h2>
      ))}
    </div>
  )
}
