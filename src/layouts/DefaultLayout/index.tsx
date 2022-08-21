import { LayoutHeader, LayoutWrapper } from './styles'
import headerSvg from '../../assets/header.svg'
import logoSvg from '../../assets/logo.svg'
import { Outlet } from 'react-router-dom'

export function DefaultLayout() {
  return (
    <LayoutWrapper>
      <LayoutHeader bgImage={headerSvg}>
        <img src={logoSvg} alt="" />
      </LayoutHeader>
      <Outlet />
    </LayoutWrapper>
  )
}
