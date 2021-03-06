import React from 'react'
import { Home } from '../components/Home/Home'
import { MainLayout } from '../layouts/MainLayout'

export const HomePage = (): JSX.Element => {
  return (
    <>
      <MainLayout>
        <Home />
      </MainLayout>
    </>
  )
}
