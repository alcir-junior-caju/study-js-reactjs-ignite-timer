import { HeaderStyled } from './Header.styles'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <HeaderStyled>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderStyled>
  )
}
