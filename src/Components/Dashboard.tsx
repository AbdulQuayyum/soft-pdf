'use client'  

import React from 'react'
import { TbLoader3 } from 'react-icons/tb'
import { LiaGhostSolid } from 'react-icons/lia'
import { TiPlusOutline } from 'react-icons/ti'

import { trpc } from '@/app/_trpc/Client'
import UploadButton from './UploadButton'

const Dashboard = () => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery()

  return (
    <main className="mx-auto max-w-7xl md:p-10">
      <div className="mt-8 flex flex-col items-start justify-between gap-4 border-b border-gray-200 pb-5 sm:flex-row sm:items-center sm:gap-0">
        <h1 className="mb-3 font-bold text-5xl text-gray-900">My Files</h1>

        <UploadButton />
      </div>

      {files && files?.length !== 0 ? (
        <>
        </>
      ): isLoading ? (
        <>
        </>
      ) : (
        <div className='mt-16 flex flex-col items-center gap-2'>
          <LiaGhostSolid className='h-8 w-8 text-zinc-800' />
          <h3 className='font-semibold text-xl'>
            Pretty empty around here
          </h3>
          <p>Let&apos;s upload your first PDF.</p>
        </div>
      )}
    </main>
  )
}

export default Dashboard
