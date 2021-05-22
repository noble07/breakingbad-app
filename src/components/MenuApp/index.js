import { Link, useLocation } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'


const MenuApp = () => {

  const location = useLocation()

  return (
    <Menu color="green" size="huge" inverted secondary>
      <Menu.Item active={ location.pathname === '/' } >
        <Link to="/">
          Breaking Bad App
        </Link>
      </Menu.Item>
      <Menu.Item active={ location.pathname === '/lists' }>
        <Link to="/lists">
          Listas personalizadas 
        </Link>
      </Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item>
          Login
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default MenuApp
