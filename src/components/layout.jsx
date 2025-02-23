import React from 'react'
import Sidebar from './sidebar'
import TopBar from './topbar'
import { Outlet } from 'react-router'

export default function LayoutDashboard() {
  return (
    <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
            <TopBar />
            <Outlet />
        </main>
    </div>
  )
}
