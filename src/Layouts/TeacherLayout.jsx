import TeacherSideBar from '@/pages/Teacher/_components/TeacherSidebar'
import Header from '@/pages/User/_components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const TeacherLayout = ({ children }) => {
  return (
    <div>
    <Header />
    <TeacherSideBar />
    <div className="lg:pl-[18%]">
      <Outlet />
      {children}
    </div>
  </div>
  )
}

export default TeacherLayout