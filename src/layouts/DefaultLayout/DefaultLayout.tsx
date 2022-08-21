import { Outlet } from 'react-router-dom'
import { Header } from '../../components'
import { DefaultLayoutStyled } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutStyled>
      <Header />
      <Outlet />
    </DefaultLayoutStyled>
  )
}
