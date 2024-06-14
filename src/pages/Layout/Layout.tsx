import { Header } from '@/components/Header/Header'

import c from './Layout.module.scss'

import { MainPage } from '../Main/MainPage'

export const Layout = () => {
  return (
    <>
      <div className={c.blackBar}></div>
      <Header />
      <MainPage />
    </>
  )
}
